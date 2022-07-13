const bp = require('body-parser');
const express = require('express');

const app=express();
app.use(bp.urlencoded({extended:true}));

// so as we added the bodyparser to file and the server is also created
// so now add the ejs engine to the our server
// we have to create a folder to maintain the data within it
// we will store the ejs file there in that folder which will present in same heiarchical level that of 
// app.js and index.html file
app.set("view engine","ejs");

app.listen(3000,function(){
  console.log("server is running at localhost:3000")
});

app.get("/",function(req,res){

  var c= new Date();
  var f=c.getDate;
  if(f===6 || f===7){
    res.send("is is weekend");
  }
  res.send("It is working day");

});
