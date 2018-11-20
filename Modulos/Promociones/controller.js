'use strict'
let Promotions = require('./model');

let mongoosePaginate = require('mongoose-pagination');
let path = require('path');
let fs = require('fs');

function createPromotion(req,res){
    var promotions = Promotions();
    var params = req.body;
    promotions.name = params.name;
    promotions.icon = params.icon;

    promotions.save((err,stored) =>{
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
    Promotions.find().sort('name').paginate(page, itemsPerPage, function(err,promotions,total){
        res.status(200).send({promotions});
    });

}
function getPromotionsId(req,res){

	var id = req.params.id;
	Promotions.findById(id,(err,promotion) =>{
		if(err){
			res.status(500).send({message:'Error en la peticion'});
		}else{
			if(!promotion){
				res.status(404).send({message:'El establecimiento no existe'});
			}else{
				res.status(200).send({promotion});
			}
		}
	});
}
module.exports = {
    createPromotion,
    getAll,
    getPromotionsId
    
}
