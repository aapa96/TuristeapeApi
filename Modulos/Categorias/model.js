'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Categories = new Schema({
    name: {type:String,unique:true},
    icon: String
    // regions:{type:Schema.ObjectId,ref:"Regions"},
});


module.exports = mongoose.model('Categories', Categories);
