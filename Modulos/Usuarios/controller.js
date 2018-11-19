'use strict'
let User = require('./model');
let mongoosePaginate = require('mongoose-pagination');
let path = require('path');
let fs = require('fs');
const saltRounds = 10;
// var bcrypt = require('bcrypt-nodejs');
let bcrypt = require('bcrypt');
var jwt = require('./../jwt');

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
        bcrypt.hash(params.password,saltRounds,(err,hash)=>{
            console.log(hash);
            user.password = hash;
            user.save((err,stored) =>{
                if(err){
                    res.status(500).send("Error al guardar usuario");
                }else{
                    if(stored){
                        res.status(200).send(stored);
                    }else{
                        res.status(404).send("No se registro el usuario");
                    }
                }
            })
        })
    }else{
        res.status(404).send("Ingrese su contrasena");
    }
}

function getUser(req,res){
    var params = req.body;
    var email = params.email;

}

function loginUser(req,res){
    var params = req.body;
    var email = params.email;
    var password = params.password;
    User.findOne({email:email.toLowerCase()},(err,user)=>{
        if(err){
            res.status(500).send("Error en la peticion");
        }else{
            if(user){
                bcrypt.compare(password,user.password,function(err,check){
                    if(check){
                        //devolver token con datos de usuario gracias a jwt
                        res.status(200).send({
                            token:jwt.createToken(user),
                            email:user.email,
                            name:user.name,
                            surname:user.surname,
                            birthday:user.birthday,
                            phone:user.phone
                        });
                    }else{
                        res.status(404).send("Contraseña incorrecta");
                    }
                })
            }else{
                res.status(404).send({message:"Usuario no ha podido loguearse"});
            }
        }
    })
}

module.exports = {
    test,
    newUser,
    loginUser
}
