var mongoose = require('mongoose');
// var daysSchema = require('./dayModel.js');

var planetSchema = mongoose.Schema({
    name: String,
    moons: [String],
    distanceFromSun: Number,
    mass: Number,
    ringSystem: Boolean,
    lengthOfDay: Number,
    orbitalPeriod: Number 
});

var Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;


