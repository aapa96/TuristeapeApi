'use strict'
let Regions = require('./model');

let mongoosePaginate = require('mongoose-pagination');
let path = require('path');
let fs = require('fs');

function createRegion(req,res){
    var regions = Regions();
    var params = req.body;
    regions.name = params.name;
    regions.country = params.country;

    regions.save((err,stored) =>{
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

function getAll(req,res) {
    let page = 1;
    let itemsPerPage =20;
    Regions.find().sort('name').paginate(page, itemsPerPage, function(err,paises,total){
        res.status(200).send({paises});
    });

}
module.exports = {
    createRegion,
    getAll
    
}
