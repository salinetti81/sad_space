var mongoose = require('mongoose');

var daysScema = mongoose.Schema({
    date: Date,
    events:[String]
});

var Day = mongoose.model('Day', daySchema);

module.exports = Day;