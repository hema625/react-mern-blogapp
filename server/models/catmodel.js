var mongoose = require('mongoose');

var catSchema =  new mongoose.Schema({
    categoryname : String
});

module.exports =  mongoose.model("Category",catSchema);