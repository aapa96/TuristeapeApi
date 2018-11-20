'use strict'
let express = require('express');
let controller = require('./controller');
let api = express.Router();

api.post('/category/new',controller.createCategory);
api.get('/category/all',controller.getAll);
api.get('/category/id',controller.getCategoryId);

module.exports = api;
