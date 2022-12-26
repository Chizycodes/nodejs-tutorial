const express = require('express');
const authRoutes = express.Router();
const AuthController = require('../controllers/AuthController');

authRoutes.route('/signup').post(AuthController.signup);
authRoutes.route('/login').post(AuthController.login);

module.exports = authRoutes;