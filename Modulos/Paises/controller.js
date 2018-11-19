'use strict'
let Countries = require('./model');

let mongoosePaginate = require('mongoose-pagination');
let path = require('path');
let fs = require('fs');

function createCountry(req,res){
    var countries = Countries();
    var params = req.body;
    countries.name = params.name;

    countries.save((err,stored) =>{
        if(err){
            res.status(500).send("Error al guardar el país.");

        }else{
            if(stored){
                res.status(200).send(stored);
            }else{
                res.status(404).send("No se registro el país.");
            }
        }
    })
    
}


module.exports = {
    createCountry
}
