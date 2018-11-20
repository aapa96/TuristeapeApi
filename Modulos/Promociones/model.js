'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Promotions = new Schema({
    name: {type:String},
    image: String,
    place:{type:Schema.ObjectId,ref:"Places"}
});


module.exports = mongoose.model('Promotions', Promotions);
