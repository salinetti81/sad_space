var mongoose = require('mongoose');

//require bcrypt
var bcrypt = require('bcrypt-nodejs');


var userSchema = mongoose.Schema({
    name: String,
    email:String,
    password:String,
});


//bcrypt 


var User = mongoose.model('User', userSchema);

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}


module.exports = User;