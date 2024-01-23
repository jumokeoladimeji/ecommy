import express from 'express';

import userHandler from '../requestHandler/user.js';
const userRouter = express.Router();

userRouter
    .post('/signup', userHandler.signup)
    .get('/verify/:token', userHandler.verify)
    .post('/signin', userHandler.signin)
    .get('/:userId', userHandler.get)
    .put('/:userId', userHandler.update)
    .post('/forgotpassword', userHandler.forgotPassword)
    .get('/resetPassword/:token', userHandler.validateResetToken)
    .post('/changePassword/:token', userHandler.changePassword)

export default userRouter;