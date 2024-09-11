import { body, validationResult } from 'express-validator';
import { connectToDatabase, closeConnection } from '../database/mySql.js';
import dotenv from 'dotenv'
import { queryAsync, mailSender, logError, logInfo, logWarning } from '../helper/index.js';

dotenv.config()



export const discussionpost = async (req, res) => {
    let success = false;

    const userId = req.user.id;
    // console.log(userId)

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

                    if (likes !== null) {
                        const likeExistsQuery = `select DiscussionID from Community_Discussion where ISNULL(delStatus,0)=0 and Reference= ? and UserID = ? and Likes is not null;`
                        const likeExists = await queryAsync(conn, likeExistsQuery, [threadReference, rows[0].UserID])
                        if (likeExists.length > 0) {
                            // console.log(likeExists[0].DiscussionID)
                            const updateLikeQuery = `UPDATE Community_Discussion SET Likes = ?, AuthLstEdit= ?, editOnDt= GETDATE() WHERE ISNULL(delStatus, 0) = 0 AND DiscussionID = ?`
                            const updateLike = await queryAsync(conn, updateLikeQuery, [likes, rows[0].Name, likeExists[0].DiscussionID])
                            const infoMessage = "like Posted Successfully"
                            closeConnection();
                            res.status(200).json({ success, data: {}, message: infoMessage });
                            return
                        }
                    }
                    const discussionPostQuery = `
                    INSERT INTO Community_Discussion 
                    (UserID, Title, Content, Image, Likes, Comment, Tag, Visibility, Reference, ResourceUrl, AuthAdd, AddOnDt, delStatus) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, GETDATE(), 0); 
                    `;
                    const discussionPost = await queryAsync(conn, discussionPostQuery, [rows[0].UserID, title, content, image, likes, comment, tags, visibility, threadReference, url, rows[0].Name, 0])
                    const lastInsertedIdQuerry = `select top 1 DiscussionID from Community_Discussion where ISNULL(delStatus,0)=0 order by DiscussionID desc;`
                    const lastInsertedId = await queryAsync(conn, lastInsertedIdQuerry)
                    success = true;
                    closeConnection();
                    const infoMessage = "Disscussion Posted Successfully"
                    logInfo(infoMessage)
                    res.status(200).json({ success, data: { postId: lastInsertedId[0].DiscussionID }, message: infoMessage });
                    return
                } else {
                    closeConnection();
                    const warningMessage = "User not found login first"
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

export const getdiscussion = async (req, res) => {
    let success = false;

    const userId = req.body.user;
    // console.log(userId)

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
                let rows = []
                if (userId !== null && userId !== undefined) {
                    // console.log("Ho")
                    const query = `SELECT UserID, Name FROM Community_User WHERE isnull(delStatus,0) = 0 AND EmailId = ?`;
                    rows = await queryAsync(conn, query, [userId]);
                }
                // console.log(rows)
                if (rows.length === 0) {
                    rows.push({ UserID: null });
                }
                // console.log(rows[0].UserID);
                // if (rows.length > 0) {
                const discussionGetQuery = `SELECT DiscussionID, UserID, AuthAdd as UserName, Title, Content, Image, Tag, ResourceUrl, AddOnDt as timestamp FROM Community_Discussion WHERE ISNULL(delStatus, 0) = 0 AND Visibility = 'public' AND Reference = 0 ORDER BY AddOnDt DESC`;
                const discussionGet = await queryAsync(conn, discussionGetQuery);
                // console.log(discussionGet)
                const updatedDiscussions = [];

                // Map over each discussion and fetch like count
                for (const item of discussionGet) {
                    // Query to get like count for each discussion
                    const likeCountQuery = `SELECT DiscussionID, UserID, Likes, AuthAdd as UserName FROM Community_Discussion WHERE ISNULL(delStatus, 0) = 0 AND Likes > 0 AND Reference = ?`;
                    const likeCountResult = await queryAsync(conn, likeCountQuery, [item.DiscussionID]);

                    const commentQuery = `SELECT DiscussionID, UserID, Comment, AuthAdd as UserName, AddOnDt as timestamp FROM Community_Discussion WHERE ISNULL(delStatus, 0) = 0 AND  Comment IS NOT NULL AND Reference = ? ORDER BY AddOnDt DESC`;
                    const commentResult = await queryAsync(conn, commentQuery, [item.DiscussionID]);
                    const commentsArray = Array.isArray(commentResult) ? commentResult : [];

                    const commentsArrayUpdated = [];

                    let userLike = 0;

                    // Check if `UserID` in `likeCountResult` matches `rows[0].UserId`

                    if (likeCountResult.some(likeItem => likeItem.UserID === rows[0].UserID && likeItem.Likes === 1)) {
                        userLike = 1;
                    }

                    if (commentsArray.length > 0) {
                        for (const comment of commentsArray) {
                            // Reset the second-level comments array for each top-level comment
                            const commentsArrayUpdatedSecond = [];

                            const likeCountQuery = `SELECT DiscussionID, UserID, Likes, AuthAdd as UserName FROM Community_Discussion WHERE ISNULL(delStatus, 0) = 0 AND Likes > 0 AND Reference = ?`;
                            const likeCountResult = await queryAsync(conn, likeCountQuery, [comment.DiscussionID]);
                            const likeCount = likeCountResult.length > 0 ? likeCountResult.length : 0;

                            const commentQuery = `SELECT DiscussionID, UserID, Comment, AuthAdd as UserName, AddOnDt as timestamp FROM Community_Discussion WHERE ISNULL(delStatus, 0) = 0 AND  Comment IS NOT NULL AND Reference = ? ORDER BY AddOnDt DESC`;
                            const commentResult = await queryAsync(conn, commentQuery, [comment.DiscussionID]);
                            const secondLevelCommentsArray = Array.isArray(commentResult) ? commentResult : [];

                            let secondLevelUserLike = 0;

                            // Check if `UserID` in `likeCountResult` matches `rows[0].UserId`
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

                    // Add like count to the discussion item
                    updatedDiscussions.push({ ...item, likeCount, userLike, comment: commentsArrayUpdated });
                }

                success = true;
                closeConnection();
                const infoMessage = "Discussion Get Successfully";
                logInfo(infoMessage);
                res.status(200).json({ success, data: { updatedDiscussions }, message: infoMessage });
                return;
                // } else {
                //     closeConnection();
                //     const warningMessage = "User not found";
                //     logWarning(warningMessage);
                //     res.status(200).json({ success: false, data: {}, message: warningMessage });
                //     return;
                // }
            }
            catch (queryErr) {
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