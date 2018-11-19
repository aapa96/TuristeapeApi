'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
    name: String,
	surname: String,
	email: String,
	password: String,
	birthay: String,
	phone: Number,
});


module.exports = mongoose.model('User', User);
