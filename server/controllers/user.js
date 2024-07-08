// const express = require('express');
// import express from 'express'
// const { body, validationResult } = require('express-validator');
import {  validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
import { connectToDatabase, closeConnection } from '../database/mySql.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

import { generatePassword } from '../utility/randompassgenerator.js';

dotenv.config()
// const router = express.Router();
const JWT_SECRET = process.env.JWTSECRET;


//Route 0) To verify if User already exists

export const databaseUserVerification =  async (req, res) => {
  let success= false;
  const userEmail = req.body.email;
  // if there are errors, return bad reuest and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }
  try {
  connectToDatabase(async (err, conn) => {
    if (err) {
      res.status(500).send('Failed to connect to database');
      return;
    }
    try {
    
    const query = `SELECT * FROM Community_User where EmailId='${userEmail}'`;
    conn.query(query, async (queryErr, rows) => {
      if (queryErr) {
        res.status(500).send('Query error');
        closeConnection();
        return;
      }

      if (rows.length > 0 ) {
        if( rows[0].FlagPasswordChange == 0){
          let password= await generatePassword(10)
          console.log(password)
          bcrypt.genSalt(10, (saltErr, salt) => {
            if (saltErr) {
              console.error('Error generating salt:', saltErr);
              return res.status(500).send('Error generating salt');
            }

            bcrypt.hash(password, salt, (hashErr, secPass) => {
              if (hashErr) {
                console.error('Error hashing password:', hashErr);
                return res.status(500).send('Error hashing password');
              }

              // Insert new user into the database
              const updateQuery = `UPDATE Community_User SET Password = ? WHERE EmailId = ? `;
              conn.query(updateQuery, [ secPass, userEmail], (updateErr, insertResult) => {
                if (updateErr) {
                  // console.error('Insert query error:', insertErr);
                  return res.status(500).send('Update query error' + updateErr);
                }

                // Close connection after query execution
                closeConnection();

                // Respond with success message
                res.json({ message: { "success": true, "Data": {"username":userEmail , "password" : password} } })
              });
            })
          })
       
       
       }
        else{
          res.json({ message: { "success": true, "Data":{} } })
          closeConnection();
        }
      } else {
        res.json({ message: { "success": false, "Data": userEmail } })
        closeConnection();
      }
    });
  }catch(error){
    closeConnection();
    res.status(404).json({message:error.message})
  }

}) 
}catch (error) {
  closeConnection();
  res.status(404).json({ message: error.message });
}
}



//Route 1) create a User using : POST '/api/auth/createuser'. Doesn't require Auth

// Function to handle user registration
export const registration = async (req, res) => {
  let success = false;

  // Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  const userEmail = req.body.email;
  const name = req.body.name;
  const password = req.body.password;

  try {
    // Connect to the SQL Server using the provided function
    connectToDatabase(async (err, conn) => {
      if (err) {
        console.error('Failed to connect to database:', err);
        return res.status(500).send('Failed to connect to database');
      }

      try {
        // Check if user already exists with the same email
        const checkQuery = `SELECT * FROM Community_User WHERE EmailId = ?`;
        conn.query(checkQuery, [userEmail], (queryErr, existingUsers) => {
          if (queryErr) {
            console.error('Query error:', queryErr);
            return res.status(500).send('Query error');
          }

          if (existingUsers.length > 0) {
            // User with this email already exists
            return res.status(400).json({ success, error: 'A user with this email already exists' });
          }

          // If user does not exist, hash the password
          bcrypt.genSalt(10, (saltErr, salt) => {
            if (saltErr) {
              console.error('Error generating salt:', saltErr);
              return res.status(500).send('Error generating salt');
            }

            bcrypt.hash(password, salt, (hashErr, secPass) => {
              if (hashErr) {
                console.error('Error hashing password:', hashErr);
                return res.status(500).send('Error hashing password');
              }

              // Insert new user into the database
              const insertQuery = `INSERT INTO Community_User (Name, EmailId, Password) VALUES (?, ?, ?)`;
              conn.query(insertQuery, [name, userEmail, secPass], (insertErr, insertResult) => {
                if (insertErr) {
                  console.error('Insert query error:', insertErr);
                  return res.status(500).send('Insert query error');
                }

                // Close connection after query execution
                closeConnection();

                // Respond with success message
                return res.status(200).json({ success: true, data: { user:{
                  EmailID:userEmail
                }} });
              });
            });
          });
        });
      } catch (error) {
        console.error('Query execution error:', error);
        return res.status(500).send('Query execution error');
      }
    });
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).send('Internal server error');
  }
};


//Route 2) Authenticate a user using POST '/api/auth/login' - no login required


export const login = async (req, res) => {
   let success= false;
  // if there are errors, return bad reuest and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email,password} = req.body;
  try{
    // let user = await User.findOne({email});
    connectToDatabase(async (err, conn) => {
      if (err) {
        return res.status(500).send('Failed to connect to database');
      }

      const query = "SELECT * FROM Community_User WHERE EmailId = ?";
      conn.query(query, [email], async (queryErr, result) => {
        if (queryErr) {
          console.log(queryErr);
          res.status(500).send('Query error');
          closeConnection();
          return;
        }
    if(!result.length > 0){
      return res.status(401).json({success, error:"Please try to login with correct credentials"});
    }
    const passworddccompare = await bcrypt.compare(password,result[0].Password);
    if(!passworddccompare){
      return res.status(401).json({success, error:"Please try to login with correct credentials"});
    }
    const data={
      user:{
        id:result[0].EmailId
      }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    success = true;
     res.status(200).json({success,authtoken});
     closeConnection();
    });
  });
  }catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error");
  }

};

//Route 3) Get loggedin user detail using POST "/api/auth/getuser"  - Login required

// router.post('/getuser',fetchUser,)
    
export const getuser = async (req, res) => {
   let success=false
  try {
    const userId = req.user.id;
    console.log(userId)
    connectToDatabase(async (err, conn) => {
      if (err) {
        res.status(500).send('Failed to connect to database');
        return;
      }
    // const user = await User.findById(userId).select("-password");
    const query = `SELECT * FROM Community_User where EmailId='${userId}'`;
    conn.query(query, (queryErr, rows) => {
      if (queryErr) {
        res.status(500).send('Query error' + queryErr);
        closeConnection();
        return;
      }

      if (rows.length > 0 ) {
        const data = Object.entries(rows[0]).reduce((acc, [key, value]) => {
          // Example condition: include only elements with values greater than 2
          // console.log(value)
          if (key != "Password") {
            acc[key] = value;
          }
          return acc;
        }, {});
        success=true
        res.status(200).json({success:success,data:data});
      }
})
    })
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }

}; 

