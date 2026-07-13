const { Router } = require('express');
const { AuthController } = require('./auth.controller');

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

module.exports = { authRouter };
