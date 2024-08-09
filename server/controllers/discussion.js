import { body, validationResult } from 'express-validator';
import { connectToDatabase, closeConnection } from '../database/mySql.js';
import dotenv from 'dotenv'
import { queryAsync, mailSender, logError, logInfo, logWarning } from '../helper/index.js';

dotenv.config()
// const JWT_SECRET = process.env.JWTSECRET;
// const SIGNATURE = process.env.SIGNATURE;


export const discussionpost = async (req, res) => {
    let success = false;

    const userId = req.user.id;
    console.log(userId)

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const warningMessage = "Data is not in the right format";
        logWarning(warningMessage); // Log the warning
        res.status(400).json({ success, data: errors.array(), message: warningMessage });
        return;
    }

    try {
        // console.log(req.body)
        let { title, content, image, likes, comment, tags, url, visibility, reference } = req.body;
        const threadReference = reference ?? 0;
        title = title ?? null
        content = content ?? null
        image = image ?? null
        likes = likes ?? null
        comment = comment ?? null
        tags = tags ?? null
        url = url ?? null
        visibility = visibility ?? null

        // console.log(title, content, image, likes, comment, tags, url, visibility, threadReference)
        // Connect to the database
        connectToDatabase(async (err, conn) => {
            if (err) {
                const errorMessage = "Failed to connect to database";
                logError(err); // Log the error
                res.status(500).json({ success: false, data: err, message: errorMessage });
                return;
            }

            try {
                const query = `SELECT UserID, Name FROM Community_User WHERE isnull(delStatus,0) = 0 AND EmailId = ?`;
                const rows = await queryAsync(conn, query, [userId]);
                // console.log(rows)

                if (rows.length > 0) {
                    const discussionPostQuery = `INSERT INTO Community_Discussion (UserID, Title, Content, Image, Likes, Comment, Tag, Visibility, Reference, ResourceUrl, AuthAdd, AddOnDt, delStatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, GETDATE(), 0)`
                    const discussionPost = await queryAsync(conn, discussionPostQuery, [rows[0].UserID, title, content, image, likes, comment, tags, visibility, threadReference, url, rows[0].Name, 0])
                    success = true;
                    closeConnection();
                    const infoMessage = "Disscussion Posted Successfully"
                    logInfo(infoMessage)
                    res.status(200).json({ success, data: {}, message: infoMessage });
                    return
                } else {
                    closeConnection();
                    const warningMessage = "User not found"
                    logWarning(warningMessage)
                    res.status(200).json({ success: false, data: {}, message: warningMessage });
                    return
                }
            } catch (queryErr) {
                closeConnection();
                logError(queryErr)
                res.status(500).json({ success: false, data: queryErr, message: 'Something went wrong please try again' });
                return
            }
        });
    } catch (error) {
        logError(error)
        return res.status(500).json({ success: false, data: {}, message: 'Something went wrong please try again' });

    }
}