import express from "express";
import { body } from 'express-validator';
import {fetchUser} from '../middleware/fetchUser.js';

import {

  login,
  registration,
  getuser,
  databaseUserVerification

} from "../controllers/user.js";

const router = express.Router();

router.post('/verify',[
  body('email', 'Enter a valid email').isEmail()
],databaseUserVerification)

router.post('/registration', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password at least 5 character').isLength({ min: 5 })
  ],registration);

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password can not be blank').exists()
  ],login);

router.post('/getuser',fetchUser,getuser)



 export default router;