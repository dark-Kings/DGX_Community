import express from "express";
import { body } from 'express-validator';
import { fetchUser } from '../middleware/fetchUser.js';

import {

} from "../controllers/discussion.js";
import { discussionpost } from "../controllers/discussion.js";

const router = express.Router();

router.post('/discussionpost', fetchUser, discussionpost)

export default router;