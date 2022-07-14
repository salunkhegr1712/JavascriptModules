// this is how you can declare the function in one kjs file
// and extract value in another js file
exports.givedate = givedate;
exports.newf=newf;

function givedate() {

  var g = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var a = new Date();
  var b = a.getDate();
  var bb = a.getMonth();
  var d = a.getDay();
  var e = a.getFullYear();

  var data = g[d] + ", " + b + " " + m[bb] + " " + e;

  return data;
}
// thi is hoe yoi can get value for a variable
exports.pie=3.14;

function newf(){
  return "hello world"
}
