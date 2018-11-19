'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Countries = new Schema({
    name: {type:String,unique:true}
});


module.exports = mongoose.model('Countries', Countries);
