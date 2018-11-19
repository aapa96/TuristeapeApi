'use strict'
let express = require('express');
let controller = require('./controller');
let api = express.Router();

api.post('/country/new',controller.createCountry);

module.exports = api;
