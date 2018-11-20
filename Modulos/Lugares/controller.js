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
    places.website = params.website;
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
    var find;
    find = Places.find(function(err,lugares){
                lugares = lugares.sort(function () {
                    return Math.random() - 0.5
                });

            })
    find.populate({path: 'categoria'}).exec((err, lugares)=>{
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

module.exports = {
    createPlaces,
    getAll
    
}
