'use strict'

let mongoose = require('mongoose');
let app = require('./app');
var db = process.env.MONGODB_URI || 'mongodb://localhost:27017/turisteape';
let port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;
mongoose.connect(config.db,{useNewUrlParser: true },(err,res) =>{
    if(err){
        throw err;
    }else{
        console.log("La base de datos turisteape esta corriendo en el port 27017");
        app.listen(port,function(){
            console.log("Servidor corriendo en el puerto "+ port);
        })
    }
})

