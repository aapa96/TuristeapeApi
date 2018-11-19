'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
    name: String,
	surname: String,
	email: {type:String,unique:true},
	password: String,
	birthday: String,
	phone: Number,
});


module.exports = mongoose.model('User', User);
