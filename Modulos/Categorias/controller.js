'use strict'
let Categories = require('./model');

let mongoosePaginate = require('mongoose-pagination');
let path = require('path');
let fs = require('fs');

function createCategory(req,res){
    var categories = Categories();
    var params = req.body;
    categories.name = params.name;
    categories.regions = params.regions;

    categories.save((err,stored) =>{
        if(err){
            res.status(500).send("Error al guardar el categoria.");

        }else{
            if(stored){
                res.status(200).send(stored);
            }else{
                res.status(404).send("No se registro el categoria.");
            }
        }
    })
    
}

function getAll(req,res) {
    let page = 1;
    let itemsPerPage =20;
    Categories.find().sort('name').paginate(page, itemsPerPage, function(err,categorias,total){
        res.status(200).send({categorias});
    });

}
module.exports = {
    createCategory,
    getAll
    
}
