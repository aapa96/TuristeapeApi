'use strict'
// let test = require('./modelo');
let mongoosePaginate = require('mongoose-pagination');
let path = require('path');
let fs = require('fs');

function test(req,res){
    res.status(200).send({message:"HOLAPAPU{"});
}

module.exports = {
    test
}
