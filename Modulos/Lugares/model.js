'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Places = new Schema({
    name: {type:String},
    longitude:String,
    latitude:String,
    image:[String],
    description:String,
    website:String,
    phone:String,
    region:{type:Schema.ObjectId,ref:"Regions"},
    category:{type:Schema.ObjectId,ref:"Categoires"},
});


module.exports = mongoose.model('Places', Places);
