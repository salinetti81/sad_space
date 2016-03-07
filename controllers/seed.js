var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var Planet = require('../models/planetsModel.js');

var newPlanet = [
	{name:'Mercury', moons:'0', distanceFromSun:57.9, mass:0.330, ringSystem:false, lengthOfDay:4222.6, orbitalPeriod:88.0},
	{name:'Venus', moon:'0', distanceFromSun:108.2, mass:4.87, ringSystem:false, lengthOfDay:2802.0, orbitalPeriod:224.7},
	{name:'Earth', moon:'1', distanceFromSun:	149.6, mass:5.97, ringSystem:false, lengthOfDay:24, orbitalPeriod:365.2},
	{name:'Mars', moon:'2', distanceFromSun:227.9 , mass:0.642, ringSystem:false, lengthOfDay:24.7, orbitalPeriod:249.2},
	{name:'JUPITER ', moon:'67', distanceFromSun:778.6 , mass:1898, ringSystem:true, lengthOfDay:9.9, orbitalPeriod:4331},
	{name:'Saturn', moon:'62', distanceFromSun:1433.5, mass:568, ringSystem:true, lengthOfDay:10.7, orbitalPeriod:10747},
	{name:'Uranus', moon:'27', distanceFromSun:2872.5, mass:86.8, ringSystem:true, lengthOfDay:17.2, orbitalPeriod:30589},
	{name:'Neptune', moon:'14', distanceFromSun:4495.1, mass:102, ringSystem:true, lengthOfDay:16.1, orbitalPeriod:59800},
	{name:'Pluto', moon:'5', distanceFromSun:5906.4, mass:0.0146, ringSystem:false, lengthOfDay:153.3, orbitalPeriod:90560},
	]



router.get('/', function(req, res) {
	Planet.create(newPlanet, function(err) {
		if (err) {
			console.log(err);
			res.send('Error seeding database');
		} else {
			console.log('SEED EXECUTED');
			res.redirect('/')
		}
	});
});

	module.exports = router;