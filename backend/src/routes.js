const express = require('express');

const routes = express.Router();

const authController = require('./controllers/authController');

routes.post('/register', authController.create);


module.exports = routes;