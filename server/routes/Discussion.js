import express from "express";
import { body } from 'express-validator';
import { fetchUser } from '../middleware/fetchUser.js';


import { discussionpost, getdiscussion } from "../controllers/discussion.js";

const router = express.Router();

router.post('/discussionpost', fetchUser, discussionpost)
router.post('/getdiscussion', fetchUser, getdiscussion)

export default router;