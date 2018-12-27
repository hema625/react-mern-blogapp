var express = require('express');
var router = express.Router();
var Blog = require('../models/blogsch');

router.get("/alldata",(req,res)=> {
    Blog.find({},(err,found)=> {
      if (err){
        console.log(err);
      }
      else {
          // res.render("tech",{data : found});
          res.json(found);
      }
    })
})

router.post("/alldata",(req,res)=> {
  console.log("whole body",req.body);
  Blog.create(req.body,(err,found)=> {
    if (err){
      console.log(err);
    }
    else {
        // res.render("tech",{data : found});
        res.json(found);
        // res.redirect("/alldata");
    }
  })
})

module.exports = router;
