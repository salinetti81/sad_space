var mongoose = require('mongoose');

//require bcrypt
var bcrypt = require('bcrypt-nodejs');


var userSchema = mongoose.Schema({
    name: String,
    email:String,
    password:String,
});


//bcrypt 

userSchema.methods.generateHash = function(password) {
	console.log('generating hash . . . . . ');
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

var User = mongoose.model('User', userSchema);
module.exports = User;