import express from 'express';
import usersController from './user.controller';

const router = express.Router();

router.post('/create-user', usersController.createUserController);

export default router;
