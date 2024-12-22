
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import { connectToDatabase, closeConnection } from '../database/mySql.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import { generatePassword, referCodeGenerator, encrypt } from '../utility/index.js';
import { queryAsync, mailSender, logError, logInfo, logWarning } from '../helper/index.js';

dotenv.config()
const JWT_SECRET = process.env.JWTSECRET;
const SIGNATURE = process.env.SIGNATURE;






export const profileDetail = async (req, res) => {
    let success = false;
    const userId = req.user.id;
    // console.log(userId)
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const warningMessage = "Data is not in the right format";
        logWarning(warningMessage); // Log the warning
        return res.status(400).json({ success, data: errors.array(), message: warningMessage });
    }

    try {

        connectToDatabase(async (err, conn) => {
            if (err) {
                logError(err)
                res.status(500).json({ success: false, data: err, message: "Failed to connect to database" });
                return;
            }

            try {
                let { userPicture, userMobile, userDesignation, userCollege, userAbout } = req.body;
                userPicture = userPicture ?? null
                userMobile = userMobile ?? null
                userDesignation = userDesignation ?? null
                userCollege = userCollege ?? null
                userAbout = userAbout ?? null
                console.log(userPicture, userMobile, userDesignation, userCollege, userAbout)



                const query = `SELECT Name FROM Community_User WHERE isnull(delStatus,0) = 0 AND EmailId = ?`;
                const rows = await queryAsync(conn, query, [userId]);

                if (rows.length > 0) {

                    try {

                        if (userPicture != null || userMobile != null || userDesignation != null || userCollege != null || userAbout != null) {

                            const updateQuery = `UPDATE Community_User SET MobileNumber = ?, Designation = ?, CollegeName = ?, About = ?, ProfilePicture = ?, AuthLstEdit= ?, editOnDt = GETDATE() WHERE isnull(delStatus,0) = 0 AND EmailId= ?`
                            const update = await queryAsync(conn, updateQuery, [userMobile, userDesignation, userCollege, userAbout, userPicture, rows[0].Name, userId])

                        }
                        const getQuery = `SELECT Name, EmailId, CollegeName, MobileNumber, Designation, About, ProfilePicture FROM Community_User WHERE isnull(delStatus,0) = 0 AND EmailId = ?`
                        const getRows = await queryAsync(conn, getQuery, [userId]);
                        const userData = getRows[0]
                        closeConnection();
                        const warningMessage = 'This link is not valid'
                        logWarning(warningMessage)
                        return res.status(200).json({ success: false, data: { userData }, message: warningMessage })


                    } catch (Err) {
                        closeConnection();
                        logError(Err)
                        res.status(500).json({ success: false, data: Err, message: 'Something went wrong please try again' });
                    }

                } else {
                    closeConnection();
                    const warningMessage = "invalid link"
                    logWarning(warningMessage)
                    res.status(200).json({ success: false, data: {}, message: warningMessage });
                }
            } catch (queryErr) {
                closeConnection();
                logError(queryErr)
                res.status(500).json({ success: false, data: queryErr, message: 'Something went wrong please try again' });
            }

        })
    } catch (Err) {
        closeConnection();
        logError(Err)
        res.status(500).json({ success: false, data: Err, message: 'Something went wrong please try again' });
    }
}


export const getUserDiscussion = async (req, res) => {
    let success = false;
    const userId = req.user.id;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const warningMessage = "Data is not in the right format";
        logWarning(warningMessage);
        res.status(400).json({ success, data: errors.array(), message: warningMessage });
        return;
    }

    try {
        connectToDatabase(async (err, conn) => {
            if (err) {
                const errorMessage = "Failed to connect to database";
                logError(err);
                res.status(500).json({ success: false, data: err, message: errorMessage });
                return;
            }

            try {

                const query = `SELECT UserID, Name FROM Community_User WHERE isnull(delStatus,0) = 0 AND EmailId = ?`;
                const rows = await queryAsync(conn, query, [userId]);




                const discussionGetQuery = `SELECT DiscussionID, UserID, AuthAdd as UserName, Title, Content, Image, Tag, ResourceUrl, AddOnDt as timestamp FROM Community_Discussion WHERE ISNULL(delStatus, 0) = 0 AND UserID = ? AND Reference = 0 ORDER BY AddOnDt DESC`;
                const discussionGet = await queryAsync(conn, discussionGetQuery, [rows[0].UserID]);
                // console.log("Discussion Get Result:", discussionGet); // Log discussionGet

                const updatedDiscussions = [];

                for (const item of discussionGet) {
                    const likeCountQuery = `SELECT DiscussionID, UserID, Likes, AuthAdd as UserName FROM Community_Discussion WHERE ISNULL(delStatus, 0) = 0 AND Likes > 0 AND Reference = ?`;
                    const likeCountResult = await queryAsync(conn, likeCountQuery, [item.DiscussionID]);
                    // console.log("Like Count Result for Discussion:", item.DiscussionID, likeCountResult); // Log likeCountResult

                    const commentQuery = `SELECT DiscussionID, UserID, Comment, AuthAdd as UserName, AddOnDt as timestamp FROM Community_Discussion WHERE ISNULL(delStatus, 0) = 0 AND  Comment IS NOT NULL AND Reference = ? ORDER BY AddOnDt DESC`;
                    const commentResult = await queryAsync(conn, commentQuery, [item.DiscussionID]);
                    const commentsArray = Array.isArray(commentResult) ? commentResult : [];
                    // console.log("Comments Array for Discussion:", item.DiscussionID, commentsArray); // Log commentsArray

                    const commentsArrayUpdated = [];
                    let userLike = 0;

                    if (likeCountResult.some(likeItem => likeItem.UserID === rows[0].UserID && likeItem.Likes === 1)) {
                        userLike = 1;
                    }

                    if (commentsArray.length > 0) {
                        for (const comment of commentsArray) {
                            const commentsArrayUpdatedSecond = [];

                            const likeCountQuery = `SELECT DiscussionID, UserID, Likes, AuthAdd as UserName FROM Community_Discussion WHERE ISNULL(delStatus, 0) = 0 AND Likes > 0 AND Reference = ?`;
                            const likeCountResult = await queryAsync(conn, likeCountQuery, [comment.DiscussionID]);
                            const likeCount = likeCountResult.length > 0 ? likeCountResult.length : 0;

                            const commentQuery = `SELECT DiscussionID, UserID, Comment, AuthAdd as UserName, AddOnDt as timestamp FROM Community_Discussion WHERE ISNULL(delStatus, 0) = 0 AND  Comment IS NOT NULL AND Reference = ? ORDER BY AddOnDt DESC`;
                            const commentResult = await queryAsync(conn, commentQuery, [comment.DiscussionID]);
                            const secondLevelCommentsArray = Array.isArray(commentResult) ? commentResult : [];

                            let secondLevelUserLike = 0;
                            if (likeCountResult.some(likeItem => likeItem.UserID === rows[0].UserID && likeItem.Likes === 1)) {
                                secondLevelUserLike = 1;
                            }

                            if (secondLevelCommentsArray.length > 0) {
                                for (const secondLevelComment of secondLevelCommentsArray) {
                                    const secondLevelLikeCountQuery = `SELECT DiscussionID, UserID, Likes, AuthAdd as UserName, AddOnDt as timestamp FROM Community_Discussion WHERE ISNULL(delStatus, 0) = 0 AND Likes > 0 AND Reference = ?`;
                                    const secondLevelLikeCountResult = await queryAsync(conn, secondLevelLikeCountQuery, [secondLevelComment.DiscussionID]);
                                    const secondLevelLikeCount = secondLevelLikeCountResult.length > 0 ? secondLevelLikeCountResult.length : 0;

                                    let secondLevelUserLike = 0;
                                    if (secondLevelLikeCountResult.some(likeItem => likeItem.UserID === rows[0].UserID && likeItem.Likes === 1)) {
                                        secondLevelUserLike = 1;
                                    }

                                    commentsArrayUpdatedSecond.push({ ...secondLevelComment, likeCount: secondLevelLikeCount, userLike: secondLevelUserLike });
                                }
                            }

                            commentsArrayUpdated.push({ ...comment, likeCount, userLike: secondLevelUserLike, comment: commentsArrayUpdatedSecond });
                        }
                    }

                    const likeCount = likeCountResult.length > 0 ? likeCountResult.length : 0;
                    updatedDiscussions.push({ ...item, likeCount, userLike, comment: commentsArrayUpdated });
                }

                success = true;
                // console.log("Updated Discussions Array:", updatedDiscussions); // Log final updatedDiscussions array

                closeConnection(); // Close the connection after all operations
                const infoMessage = "Discussion Get Successfully";
                logInfo(infoMessage);
                res.status(200).json({ success, data: { updatedDiscussions }, message: infoMessage });
            }
            catch (queryErr) {
                logError(queryErr);
                closeConnection();
                res.status(500).json({ success: false, data: queryErr, message: 'Something went wrong please try again' });
            }
        });
    } catch (error) {
        logError(error);
        res.status(500).json({ success: false, data: {}, message: 'Something went wrong please try again' });
    }
};