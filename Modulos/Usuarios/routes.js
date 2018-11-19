'use strict'
let express = require('express');
let controller = require('./controller');
let api = express.Router();

api.get('/test',controller.test);
api.post('/user/new',controller.newUser);
api.post('/user/login',controller.loginUser);

module.exports = api;
