var express = require('express');
var router = express.Router();
var Blog = require('../models/blogsch');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Technology Users');
// });

router.get("/:category",(req,res)=> {
    Blog.find({category:req.params.category},(err,found)=> {
      if (err){
        console.log(err);
      }
      else {
          // res.render("tech",{data : found});
          res.json(found);
      }
    })
})

router.post("/alldata",(req,res)=>{
  Blog.create(req.body.g,(err,found)=>{
    if(err){
      console.log(err);
    }
    else {
      res.json(found);
      // res.redirect("/");
    }
  })
})

module.exports = router;
