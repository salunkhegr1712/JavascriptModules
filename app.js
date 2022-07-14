const bp = require('body-parser');
const express = require('express');

const app = express();
// adding static repositary to the website
app.use(express.static("public"));
app.use(bp.urlencoded({
  extended: true
}));
// creating a empty array
var item = [" Buy Food", " Cook Food", " Eat Food"];
let work = [];

// so as we added the bodyparser to file and the server is also created
// so now add the ejs engine to the our server
// we have to create a folder to maintain the data within it
// we will store the ejs file there in that folder which will present in same heiarchical level that of
// app.js and index.html file
app.set("view engine", "ejs");

app.listen(3000, function() {
  console.log("server is running at localhost:3000")
});

function givedate() {
  var g = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var a = new Date();
  var b = a.getDate();
  var bb = a.getMonth();
  var d = a.getDay();
  var e = a.getFullYear();

  var data = g[d] + ", " + b + " " + m[bb] + " " + e;

  console.log(data);
  return data;
}

var data1 = givedate();

// get request for the root
app.get("/", function(req, res) {
  res.render("todolist",{data:data1,element:item});
  // in date 0 stands for sunday and the 6 stand for saturday

  // console.log(data1, c);
  // so as push request also goes from the get so we have send Object entry through render


  // so render will search for the views folder and search for  file name called the list from it
  // res.render("list",{day:d,wday:w,work:h});
  // we are parsing multiple values through render object and it has assign value to same varibles which you assign
  // in the markup inside the ejs

  // render with help of control flow and Scriptlet
  // res.render("scriplet", {
  //   day: d,
  //   wday: w,
  //   work: h
  //
});
// get request for work
app.get("/work", function(req, res) {
  res.render("todolist", {
    data: "My Works",
    element: work,
  });
});

app.post("/", function(req, res) {

  // we cant parse and send value directly through the post

  if(req.body.submit="My Works"){
    work.push(req.body.box);
    console.log(work);

    res.redirect("/work");
  }
  else {
    item.push(req.body.box);
    res.redirect("/");
  }
//ANGELA LECTURE 271
  // adding value to the items Array // appending new value to the array we will send that array to ejs


  // redirecting to get request

});

// here we just assigned the value to the post and separate the work and the todolist in same file
// then we checked for value in post
// the render the result through redirect
// we can do the same with two differnt ejs file but templating helps us here
