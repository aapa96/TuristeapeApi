'use strict'
let express = require('express');
let bodyParser = require('body-parser');
let nodeMailer = require('nodemailer');
let path = require('path');


let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT , DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});


let usuarios = require('./Modulos/Usuarios/routes');
let paises = require('./Modulos/Paises/routes');
let regiones = require('./Modulos/Regiones/routes');
let categorias = require('./Modulos/Categorias/routes');
let lugares = require('./Modulos/Lugares/routes');

app.use('/api',usuarios);
app.use('/api',paises);
app.use('/api',regiones);
app.use('/api',categorias);
app.use('/api',lugares);

 
module.exports=app;