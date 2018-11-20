'use strict'
let express = require('express');
let controller = require('./controller');
let api = express.Router();

api.post('/place/new',controller.createPlaces);
api.get('/place/all',controller.getAll);
api.get('/place/:id',controller.getLugarCategoria);

module.exports = api;
