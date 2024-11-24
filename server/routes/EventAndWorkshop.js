import express from "express";
// import { body } from 'express-validator';
import { fetchUser } from '../middleware/fetchUser.js'; // Optional, if you need user authentication
import { addEvent } from "../controllers/eventandworkshop.js"; // Import your addEvent controller

const router = express.Router();

// Route for adding a new event
router.post('/add', fetchUser, addEvent); // The fetchUser middleware can be used if you need to authenticate the user.

export default router;