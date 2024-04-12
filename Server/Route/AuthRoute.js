import express from 'express';
const router = express.Router();
import {signupUser,signinUser} from '../Controller/AuthController.js';

router.post('/signup',signupUser);
router.post('/signin',signinUser);
export default router;