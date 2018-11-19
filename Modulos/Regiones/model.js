'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Regions = new Schema({
    name: {type:String,unique:true},
    country:{type:Schema.ObjectId,ref:"Countries"},
});


module.exports = mongoose.model('Regions', Regions);
