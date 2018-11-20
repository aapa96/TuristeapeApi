'use strict'
let Places = require('./model');

let mongoosePaginate = require('mongoose-pagination');
let path = require('path');
let fs = require('fs');


function createPlaces(req,res){
    var places = Places();
    var params = req.body;
    places.name = params.name;
    places.longitude = params.longitude;
    places.latitude = params.latitude;
    places.image = params.image;
    places.description = params.description;
    // places.website = params.website;
    places.phone = params.phone;
    places.category = params.category;
    places.region = params.region;

    places.save((err,stored) =>{
        if(err){
            res.status(500).send("Error al guardar el lugar.");

        }else{
            if(stored){
                res.status(200).send(stored);
            }else{
                res.status(404).send("No se registro el lugar.");
            }
        }
    })


}
function getAll(req,res){
	if(req.params.page){
		var page = req.params.page;
	}else{
		var page = 1;
	}
	
	var itemsPerPage =8;
	Places.find().paginate(page, itemsPerPage, function(err,lugares,total){

		if(err){
			res.status(500).send({message:'Error en la peticion'});
		}else{
			if(!lugares){
				res.status(404).send({message:'No hay establecimientos'});
			}else{
				return res.status(200).send({
					lugares
				});
			}
		}

	});
}
function getLugarCategoria(req,res){
    let category = req.params.id;
    var find;
    Places.find({category:category},function(err,lugares){
        res.status(200).send(lugares) ;

            })
}
function getLugarId(req,res){

	var id = req.params.id;
	Places.findById(id,(err,lugar) =>{
		if(err){
			res.status(500).send({message:'Error en la peticion'});
		}else{
			if(!lugar){
				res.status(404).send({message:'El establecimiento no existe'});
			}else{
				res.status(200).send({lugar});
			}
		}
	});
}

module.exports = {
    createPlaces,
    getAll,
    getLugarCategoria,
    getLugarId
    
}
