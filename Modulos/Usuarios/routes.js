'use strict'
let express = require('express');
let controller = require('./controller');
let api = express.Router();

api.get('/test',controller.test);
api.post('/user/new',controller.newUser);

module.exports = api;
