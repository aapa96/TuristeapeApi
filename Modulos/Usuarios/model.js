'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TuristeaPe_LugarSchema = new Schema({
    nombre: String,
    image: String,
    categoria:{type:Schema.ObjectId,ref:"TuristeaPe_Categoria"},
    latitud: String,
    longitud: String

});


module.exports = mongoose.model('TuristeaPe_Lugar', TuristeaPe_LugarSchema);
