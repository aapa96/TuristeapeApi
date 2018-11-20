'use strict'
let Categories = require('./model');

let mongoosePaginate = require('mongoose-pagination');
let path = require('path');
let fs = require('fs');

function createCategory(req,res){
    var categories = Categories();
    var params = req.body;
    categories.name = params.name;
    categories.icon = params.icon;

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
function getCategoryId(req,res){

	var id = req.params.id;
	Categories.findById(id,(err,category) =>{
		if(err){
			res.status(500).send({message:'Error en la peticion'});
		}else{
			if(!category){
				res.status(404).send({message:'El establecimiento no existe'});
			}else{
				res.status(200).send({category});
			}
		}
	});
}
module.exports = {
    createCategory,
    getAll,
    getCategoryId
    
}
