'use strict'
let User = require('./model');
let mongoosePaginate = require('mongoose-pagination');
let path = require('path');
let fs = require('fs');
const saltRounds = 10;
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');

function test(req,res){
    res.status(200).send({message:"HOLAPAPU{"});
}

function newUser(req,res){
    var user = User();
	var params = req.body;
    console.log(params);
    user.name = params.name;
	user.surname = params.surname;
	user.email = params.email;
	user.birthday = params.birthday;
    user.phone = params.phone;

    if(params.password){
        bcrypt.hash(params.password,saltRounds,function(err,hash){
            user.password = hash;
            if (user.name != null && user.surname != null && user.email != null && user.phone != null) {
				// Guardar Usuario
				user.save((err,userStored)=>{
					if (err) {
						// statement
						res.status(500).send({message:"Error al guardar usuario"});
					} else {
						// statement
						if (!userStored) {
							res.status(404).send({message:"No se ha registrado el usuario"});
						} else {
							res.status(200).send({userStored});
						}
					}
				});
			} else {
				res.status(200).send({message:"Introduce todos los campos"});
			}
        })
    }else{
        res.status(200).send({message:"Introduce la contrasena"});
    }
}
function loginUser(req,res){

}

module.exports = {
    test,
    newUser
}
