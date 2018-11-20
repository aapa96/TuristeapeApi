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
	Places.find().populate('category').paginate(page, itemsPerPage, function(err,fields,total){

		if(err){
			res.status(500).send({message:'Error en la peticion'});
		}else{
			if(!fields){
				res.status(404).send({message:'No hay establecimientos'});
			}else{
				return res.status(200).send({
					pages: total,
					fields: fields
				});
			}
		}

	});
}
function getLugarCategoria(req,res){
    let category = req.params.id;
    var find;
    find = Places.find({category:category},function(err,lugares){


            })
    find.populate({path: 'category'}).exec((err, lugares)=>{
      if (err) {
          res.status(500).send({message: "Error en la petición"});
       }
       else {
           if (!lugares) {
               res.status(404).send({message: "No hay lugares"});
           }
           else {
               res.status(200).send({lugares});
           }
       }
    });
}
function getLugarId(req,res){

	var id = req.params.id;
	Field.findOne({ _id: id }).
    populate('category').
    exec(function (err, place) {
      if (err) return handleError(err);
      
      res.status(200).send(place)
      // prints "The author is Ian Fleming"
    });
}

module.exports = {
    createPlaces,
    getAll,
    getLugarCategoria,
    getLugarId
    
}
