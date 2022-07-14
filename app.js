const bp = require('body-parser');
const express = require('express');

const app = express();
// adding static repositary to the website
app.use(express.static("public"));
app.use(bp.urlencoded({
  extended: true
}));
// creating a empty array
var item=[" Buy Food"," Cook Food"," Eat Food"];


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

function numb() {
  var a = new Date();
  return a.getDay();

}

var data1 = givedate();
var c = numb();
app.get("/", function(req, res) {

  // in date 0 stands for sunday and the 6 stand for saturday

  // console.log(data1, c);

// so as push request also goes from the get so we have send Object entry through render
  if (c === 6 || c === 0) {
    res.render("todolist", {
      data: data1,
      element:item,
    });

  } else {
    res.render("todolist", {
      data: data1,
      element:item,
    });
  }
  // so render will search for the views folder and search for  file name called the list from it
  // res.render("list",{day:d,wday:w,work:h});
  // we are parsing multiple values through render object and it has assign value to same varibles which you assign
  // in the markup inside the ejs

  // render with help of control flow and Scriptlet
  // res.render("scriplet", {
  //   day: d,
  //   wday: w,
  //   work: h
  // })
});

app.post("/", function(req, res) {

// we cant parse and send value directly through the post
  var box=req.body.box;
  console.log(box);
  // adding value to the items Array
  item.push(box);// appending new value to the array we will send that array to ejs

// redirecting to get request
  res.redirect("/");
});
