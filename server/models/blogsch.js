var mongoose = require('mongoose');

var bschema = new mongoose.Schema({
     title : String,
     content : String,
     author : String,
     category : String,
     cdate : {
           type : Date,
           default : Date.now
     },
     mdate : {
      type : Date,
      default : Date.now
}
     
});

module.exports = mongoose.model("blog",bschema);

