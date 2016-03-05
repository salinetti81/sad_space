var mongoose = require('mongoose');
var daysSchema = require('./dayModel.js');

var userSchema = mongoose.Schema({
    name: String,
    email:String,
    password:String,
    days: [daysSchema],
    thoughts: [String]
});

var User = mongoose.model('User', userSchema);

module.exports = User;