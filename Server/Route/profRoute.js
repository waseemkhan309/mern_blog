import express from 'express';
const router = express.Router();

router.get('/profile', getUserData);
export default router;