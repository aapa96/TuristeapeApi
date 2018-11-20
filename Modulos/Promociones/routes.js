'use strict'
let express = require('express');
let controller = require('./controller');
let api = express.Router();

api.post('/promotion/new',controller.createPromotion);
api.get('/promotion/all',controller.getAll);
api.get('/promotion/:id',controller.getPromotionsId);

module.exports = api;
