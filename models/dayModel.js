var mongoose = require('mongoose');

var daysSchema = mongoose.Schema({
    date: Date,
    events:[String]
});

var Day = mongoose.model('Day', daysSchema);

module.exports = Day;