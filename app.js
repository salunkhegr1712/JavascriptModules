const bp = require('body-parser');
const express = require('express');

const app=express();
app.use(bp.urlencoded({extended:true}));

app.listen(3000,function(){
  console.log("server is running at localhost:3000")
});

app.get("/",function(req,res){
  res.send("hello world");
});
