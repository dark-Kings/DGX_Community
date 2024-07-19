
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';

import { connectToDatabase, closeConnection } from '../database/mySql.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

import { generatePassword, referCodeGenerator, encrypt } from '../utility/index.js';
import { queryAsync, mailSender, logError, logInfo, logWarning } from '../helper/index.js';

dotenv.config()
const JWT_SECRET = process.env.JWTSECRET;



//Route 0) To verify if User already exists

export const databaseUserVerification = async (req, res) => {
  let success = false;
  const userEmail = req.body.email;

  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const warningMessage = "Data is not in the right format";
    logWarning(warningMessage); // Log the warning
    res.status(400).json({ success, data: errors.array(), message: warningMessage });
    return;
  }

  try {
    // Connect to the database
    connectToDatabase(async (err, conn) => {
      if (err) {
        const errorMessage = "Failed to connect to database";
        logError(err); // Log the error
        res.status(500).json({ success: false, data: err, message: errorMessage });
        return;
      }

      try {
        // Query the database for the user
        //const query = `SELECT * FROM Community_User WHERE EmailId=?`;
        const query = 'SELECT Name,EmailId,MobileNumber,FlagPasswordChange FROM Community_User WHERE isnull(delStatus,0) = 0 and EmailId=?';
        const rows = await queryAsync(conn, query, [userEmail]);


        if (rows.length > 0) {
          // User found
          if (rows[0].FlagPasswordChange == 0) {
            try {
              // Generate a new password and current date/time
              const password = await generatePassword(10);
              // const date = await getCurrentDateTime();

              // Generate a secure password hash
              const salt = await bcrypt.genSalt(10);
              const secPass = await bcrypt.hash(password, salt);

              let referCode;
              while (!success) {
                // Generate a unique referral code
                referCode = await referCodeGenerator(rows[0].Name, rows[0].EmailId, rows[0].MobileNumber);
                // console.log(referCode)

                // Check if the referral code already exists
                const checkQuery = `SELECT COUNT(UserID) AS userReferCount FROM Community_User WHERE isnull(delStatus,0) = 0 and  ReferalNumber = ?`;
                const checkRows = await queryAsync(conn, checkQuery, [referCode]);

                // console.log(checkRows[0].Column0)

                if (checkRows[0].userReferCount === 0) {
                  // Update user record with new password, date, and referral code
                  const updateQuery = `UPDATE Community_User SET Password = ?,AuthLstEdit = ?,editOnDt = GETDATE(), ReferalNumber = ? WHERE isnull(delStatus,0)=0 and  EmailId = ?`;
                  await queryAsync(conn, updateQuery, [secPass, rows[0].Name, referCode, userEmail]);

                  // Close connection after query execution
                  closeConnection();
                  const message = `Welcome to DGX Community, Your credentials to Login given bellow.
                                   User Name: ${userEmail}
                                   Password: ${password}`
                  const htmlContent = `Welcome to DGX Community, Your credentials to Login given bellow.<br/>
                                   <b>User Name: ${userEmail}</b><br/>
                                   <b>Password: ${password}</b>`
                  const mailsent = await mailSender(userEmail, message, htmlContent)

                  // console.log(mailsent.success)
                  // Respond with success message
                  if (mailsent.success) {
                    success = true;
                    logInfo(`Mail sent successfully to ${userEmail}`); // Log the success
                    return res.status(200).json({ success: true, data: { username: userEmail }, message: "Mail send successfully" });
                  } else {
                    const errorMessage = "Mail isn't sent successfully";
                    logError(new Error(errorMessage)); // Log the error
                    return res.status(200).json({ success: false, data: { username: userEmail }, message: errorMessage });
                  }
                }
              }
            } catch (error) {
              const errorMessage = 'Error generating password';
              logError(error); // Log the error
              closeConnection();
              return res.status(500).json({ success: false, data: error, message: errorMessage });
            }
          } else {
            // User's password change flag is not 0
            const warningMessage = "Credentials already generated, go to login";
            logWarning(warningMessage); // Log the warning
            closeConnection();
            return res.status(200).json({ success: false, data: {}, message: warningMessage });
          }
        } else {
          // User not found
          const warningMessage = "You are not a part of this community. Get a referral from any existing member to join";
          logWarning(warningMessage); // Log the warning
          closeConnection();
          return res.status(200).json({ success: false, data: {}, message: warningMessage });
        }
      } catch (error) {
        const errorMessage = 'Database query error';
        logError(error); // Log the error
        closeConnection();
        return res.status(500).json({ success: false, data: {}, message: 'Something went wrong, please try again' });
      }
    });
  } catch (error) {
    const errorMessage = 'Failed to connect to database';
    logError(error); // Log the error
    closeConnection();
    return res.status(500).json({ success: false, data: {}, message: 'Something went wrong, please try again' });
  }
};



//Route 1) create a User using : POST '/api/auth/createuser'. Doesn't require Auth

export const registration = async (req, res) => {
  let success = false;

  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const warningMessage = "Data is not in the right format";
    logWarning(warningMessage); // Log the warning
    return res.status(400).json({ success, data: errors.array(), message: warningMessage });
  }

  const { inviteCode, name, email, password, collegeName, phoneNumber, category, designation } = req.body;
  const referalNumberCount = category === 'F' ? 10 : 2;
  const FlagPasswordChange = 1

  // const date = await getCurrentDateTime();

  try {
    // Connect to the SQL Server using the provided function
    connectToDatabase(async (err, conn) => {
      if (err) {
        logError(err); // Log the error
        return res.status(500).json({ success: false, data: err, message: "Failed to connect to database" });
      }

      try {
        // Check if user already exists with the same email
        const existingUserQuerry = `SELECT COUNT(UserID) AS userEmailCount FROM Community_User WHERE ISNULL(delStatus,0)=0 AND EmailId = ?`
        const existingUsers = await queryAsync(conn, existingUserQuerry, [email]);

        if (existingUsers[0].userEmailCount > 0) {
          // User with this email already exists
          const warningMessage = 'A user with this email already exists'
          logWarning(warningMessage)
          closeConnection();
          return res.status(200).json({ success: false, data: {}, message: warningMessage });
        }

        // If user does not exist, hash the password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        const checkCreditQuerry = `SELECT ReferalNumberCount, UserID FROM Community_User WHERE ISNULL(delStatus,0)=0 AND ReferalNumber = ?`
        const checkCredit = await queryAsync(conn, checkCreditQuerry, [inviteCode])
        // console.log(checkCredit[0].ReferalNumberCount)


        if (checkCredit[0].ReferalNumberCount > 0) {
          const referedBy = checkCredit[0].UserID
          const RNC = checkCredit[0].ReferalNumberCount - 1;
          // console.log(RNC)
          const referCreditDeductionQuerry = `UPDATE Community_User SET ReferalNumberCount = ${RNC} WHERE ISNULL(delStatus,0)=0 AND ReferalNumber = ?`
          const referCreditDeduction = await queryAsync(conn, referCreditDeductionQuerry, [inviteCode])
          // console.log(referCreditDeduction)


          let referCode;
          do {
            // Generate a unique referral code
            referCode = await referCodeGenerator(name, email, phoneNumber);
            // console.log(referCode);

            // Check if the referral code already exists
            const checkQuery = `SELECT COUNT(UserID) AS userReferCount FROM Community_User WHERE isnull(delStatus,0) = 0 AND  ReferalNumber = ?`;
            const checkRows = await queryAsync(conn, checkQuery, [referCode]);

            if (checkRows[0].userReferCount === 0) {
              // Insert new user into the database
              // console.log("hi")
              const insertQuerry = `INSERT INTO Community_User (Name, EmailId, CollegeName, MobileNumber, Category, Designation, ReferalNumberCount, ReferalNumber, Password, FlagPasswordChange, ReferedBy, AuthAdd, AddOnDt, delStatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, GETDATE(), ?)`
              const insertResult = await queryAsync(conn, insertQuerry, [name, email, collegeName, phoneNumber, category, designation, referalNumberCount, referCode, secPass, FlagPasswordChange, referedBy, name, 0]);

              success = true;

              const infoMessage = "User created successfully"
              logInfo(`infoMessage with ${email}`)
              // Close connection after query execution
              closeConnection();

              // Respond with success message
              return res.status(200).json({
                success: success,
                data: {
                  user: {
                    EmailID: email
                  }
                },
                message: infoMessage
              });
            }
          } while (!success);

        } else {
          const warningMessage = "This Refer Number not have refer credit left try with different refer code"
          logWarning(warningMessage);
          closeConnection();
          return res.status(200).json({ success: success, data: {}, message: warningMessage });
        }
      } catch (error) {
        logError(error); // Log the error
        closeConnection();
        return res.status(500).json({ success: false, data: error, message: 'Error generating password or referral code' });
      }
    });
  } catch (error) {
    logError(error); // Log the error
    closeConnection();
    return res.status(500).json({ success: false, data: {}, message: 'Internal server error. Please try again' });
  }
};


//Route 2) Authenticate a user using POST '/api/auth/login' - no login required

export const login = async (req, res) => {
  let success = false;

  // if there are errors, return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const warningMessage = "Data is not in the right format";
    logWarning(warningMessage); // Log the warning
    return res.status(400).json({ success, data: errors.array(), message: warningMessage });
  }


  const { email, password } = req.body;

  try {
    connectToDatabase(async (err, conn) => {
      if (err) {
        logError(err); // Log the error
        return res.status(500).json({ success: false, data: err, message: "Failed to connect to database" });
      }

      try {
        const query = "SELECT EmailId, Password, FlagPasswordChange FROM Community_User WHERE isnull(delStatus,0) = 0 AND EmailId = ?";
        const result = await queryAsync(conn, query, [email]);

        if (result.length === 0) {
          const warningMessage = "Please try to login with correct credentials"
          logWarning(warningMessage)
          closeConnection();
          return res.status(200).json({ success: false, data: {}, message: warningMessage });
        }
        const passwordCompare = await bcrypt.compare(password, result[0].Password);
        if (!passwordCompare) {
          const warningMessage = "Please try to login with correct credentials"
          logWarning(warningMessage)
          closeConnection();
          return res.status(200).json({ success: false, data: {}, message: warningMessage });
        }

        const data = {
          user: {
            id: result[0].EmailId
          }
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        const infoMessage = "You login successfully"
        logInfo(infoMessage)
        closeConnection();
        return res.status(200).json({ success: true, data: { authtoken, flag: result[0].FlagPasswordChange }, message: infoMessage });

      } catch (queryErr) {
        logError(queryErr)
        closeConnection();
        return res.status(500).json({ success: false, data: queryErr, message: 'Something went wrong please try again' });
      }
    });
  } catch (error) {
    logError(error)
    closeConnection();
    return res.status(500).json({ success: false, data: {}, message: 'Something went wrong please try again' });
  }
};


//Route 3) To change the password of the user

export const changePassword = async (req, res) => {
  let success = false;


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const warningMessage = "Data is not in the right format";
    logWarning(warningMessage); // Log the warning
    return res.status(400).json({ success, data: errors.array(), message: warningMessage });
  }

  try {
    const userId = req.user.id;
    // console.log(req.body)
    // console.log(userId);
    const { currentPassword, newPassword } = req.body;

    connectToDatabase(async (err, conn) => {
      if (err) {
        logError(err)
        res.status(500).json({ success: false, data: err, message: "Failed to connect to database" });
        return;
      }

      try {
        const query = `SELECT Name, Password FROM Community_User WHERE isnull(delStatus,0) = 0 AND EmailId = ?`;
        const rows = await queryAsync(conn, query, [userId]);

        if (rows.length > 0) {
          try {
            const passwordCompare = await bcrypt.compare(currentPassword, rows[0].Password);
            if (!passwordCompare) {
              const warningMessage = "Please try to login with correct credentials"
              logWarning(warningMessage)
              closeConnection();
              return res.status(200).json({ success: false, data: {}, message: warningMessage });
            }

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(newPassword, salt);
            // console.log(secPass)
            const updateQuery = `UPDATE Community_User SET Password = ?, FlagPasswordChange = 1, AuthLstEdit = ?, editOnDt = GETDATE() WHERE isnull(delStatus,0) = 0 AND EmailId = ?`
            const updatePassword = await queryAsync(conn, updateQuery, [secPass, rows[0].Name, userId])
            closeConnection();
            success = true;
            const infoMessage = "Password Change Successfully "
            logInfo(infoMessage)
            res.status(200).json({ success: true, data: {}, message: infoMessage });
          } catch (queryErr) {
            closeConnection();
            logError(queryErr)
            return res.status(401).json({ success: false, data: queryErr, message: "Something went wrong please try again" });
          }
        } else {
          const warningMessage = "User not found"
          logWarning(warningMessage)
          closeConnection();
          res.status(200).json({ success: false, data: {}, message: warningMessage });
        }
      } catch (queryErr) {
        logError(queryErr)
        closeConnection();
        res.status(500).json({ success: false, data: queryErr, message: 'Something went wrong please try again' });
      } finally {
        closeConnection();
      }
    });
  } catch (error) {
    logError(error)
    closeConnection();
    return res.status(500).json({ success: false, data: {}, message: 'Something went wrong please try again' });
  }
};



//Route 4) Get loggedin user detail using POST "/getuser"  - Login required

export const getuser = async (req, res) => {
  let success = false;

  try {
    const userId = req.user.id;
    // console.log(userId);

    connectToDatabase(async (err, conn) => {
      if (err) {
        logError(err)
        res.status(500).json({ success: false, data: err, message: "Failed to connect to database" });
        return;
      }

      try {
        const query = `SELECT UserID, Name, EmailId, CollegeName, MobileNumber, Category, Designation, ReferalNumberCount, ReferalNumber, SequrityQuesId, SequrityQuesAns, FlagPasswordChange, EmailCount, MobileCount FROM Community_User WHERE isnull(delStatus,0) = 0 AND EmailId = ?`;
        const rows = await queryAsync(conn, query, [userId]);

        if (rows.length > 0) {
          const data = Object.entries(rows[0]).reduce((acc, [key, value]) => {
            if (key !== "Password") {
              acc[key] = value;
            }
            return acc;
          }, {});
          success = true;
          closeConnection();
          const infoMessage = "User data"
          logInfo(infoMessage)
          res.status(200).json({ success, data: data, message: infoMessage });
        } else {
          closeConnection();
          const warningMessage = "User not found"
          logWarning(warningMessage)
          res.status(200).json({ success: false, data: {}, message: warningMessage });
        }
      } catch (queryErr) {
        logError(queryErr)
        res.status(500).json({ success: false, data: queryErr, message: 'Something went wrong please try again' });
      } finally {
        closeConnection();
      }
    });
  } catch (error) {
    logError(queryErr)
    return res.status(500).json({ success: false, data: {}, message: 'Something went wrong please try again' });
  }
};

//Route 5) Sending Invite to mail "/sendinvite" - Login required

export const sendInvite = async (req, res) => {
  let success = false;

  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const warningMessage = "Data is not in the right format";
    logWarning(warningMessage); // Log the warning
    return res.status(400).json({ success, data: errors.array(), message: warningMessage });
  }

  try {
    const userId = req.user.id;


    connectToDatabase(async (err, conn) => {
      if (err) {
        logError(err)
        res.status(500).json({ success: false, data: err, message: "Failed to connect to database" });
        return;
      }

      try {
        const baseLink = process.env.RegistrationLink
        const query = `SELECT ReferalNumber FROM Community_User WHERE isnull(delStatus,0) = 0 AND EmailId = ?`;
        const rows = await queryAsync(conn, query, [userId]);

        if (rows.length > 0) {
          const email = await encrypt(req.body.email)
          const refercode = await encrypt(rows[0].ReferalNumber)

          const registrationLink = `${baseLink}Register/?email=${email}&refercode=${refercode}`

          const message = `Welcome to DGX Community, Your Registration link is given bellow:
                            ${registrationLink}`
          const htmlContent = `Welcome to DGX Community, Your Registration link is given bellow:<br/>
                              <a href=${registrationLink}>${registrationLink}</a>`
          closeConnection();
          const mailsent = await mailSender(req.body.email, message, htmlContent)
          if (mailsent.success) {
            success = true;
            const infoMessage = "Invite Link send successfuly to ${req.body.email}"
            logInfo(infoMessage); // Log the success
            return res.status(200).json({ success: true, data: { registrationLink }, message: "Mail send successfully" });
          } else {
            const errorMessage = "Mail isn't sent successfully";
            logError(new Error(errorMessage)); // Log the error
            return res.status(200).json({ success: false, data: { username: userEmail }, message: errorMessage });
          }
        } else {
          closeConnection();
          const warningMessage = "User not found"
          logWarning(warningMessage)
          res.status(200).json({ success: false, data: {}, message: warningMessage });
        }
      } catch (queryErr) {
        logError(queryErr)
        res.status(500).json({ success: false, data: queryErr, message: 'Something went wrong please try again' });
      }

      // res.json({ success: true, data: { BaseLink }, message:  })

    })
  } catch (queryErr) {
    logError(queryErr)
    res.status(500).json({ success: false, data: queryErr, message: 'Something went wrong please try again' });
  }
}