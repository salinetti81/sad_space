var mongoose = require('mongoose');
// var daysSchema = require('./dayModel.js');

var planetSchema = mongoose.Schema({
    name: String,
    info: String
});

var Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;