'use strict'
let express = require('express');
let controller = require('./controller');
let api = express.Router();

api.post('/region/new',controller.createRegion);
api.get('/region/all',controller.getAll);

module.exports = api;
