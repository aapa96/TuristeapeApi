'use strict'
let express = require('express');
let controller = require('./controller');
let api = express.Router();

api.get('/test',controller.test);

module.exports = api;
