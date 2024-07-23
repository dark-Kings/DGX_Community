import { validationResult } from 'express-validator';


import { connectToDatabase, closeConnection } from '../database/mySql.js';

import dotenv from 'dotenv'


import { queryAsync, mailSender, logError, logInfo, logWarning } from '../helper/index.js';

dotenv.config()
const JWT_SECRET = process.env.JWTSECRET;
const SIGNATURE = process.env.SIGNATURE;


export const discussionpost = async (req, res) => {
    let success = false;
    res.status(200).json({ success: success, data: req.body, message: "Post uploaded successfully" })

};