// import Category from "../../client/src/components/Category";

var express = require('express');
var router = express.Router();
var Cat = require('../models/catmodel');

router.get('/all',(req,res)=> {
   
 Cat.find({},(err, found)=>{
     if(err){
         console.log(err);
     }
     else {
         res.json(found);
     }
 });
});

module.exports = router;