'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave secreta';

exports.createToken = function(user){
	var payload = {
		sub: user._id,
		name: user.name,
		surname:user.surname,
		email:user.email,
		birthday:user.birthday,
		phone:user.phone,
		iat:moment().unix(),
		exp:moment().add(366,'days').unix
	};
	return jwt.encode(payload,secret);

};