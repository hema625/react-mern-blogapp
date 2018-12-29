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

router.put("/alldata/:id",(req,res)=>{
  console.log("updating");
  Blog.findByIdAndUpdate(req.params.id,req.body,(err,updated)=>{
    if(err){
      console.log(err);
    }
    else {
      console.log(updated);
    }
  })
})

router.delete("/alldata/:id",(req,res)=>{
  console.log("deleted")
  Blog.findByIdAndRemove(req.params.id,(err,del)=>{
    if(err){
      console.log(err);
    }
    else {
      console.log(del);
    }
  })
})

module.exports = router;
// router.get("/alldata/:id",(req,res)=>{
//   Blog.findById(req.params.id,(err,found)=>{
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(found);
//     }
//   })
// })

// router.get("/alldata/:id/edit",(req,res)=>{
//   Blog.findById(req.params.id,(err, edit)=>{
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.json(edit);
//     }
//   })
// })
