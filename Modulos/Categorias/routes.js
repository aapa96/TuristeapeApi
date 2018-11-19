'use strict'
let express = require('express');
let controller = require('./controller');
let api = express.Router();

api.post('/category/new',controller.createCategory);
api.get('/category/all',controller.getAll);

module.exports = api;
