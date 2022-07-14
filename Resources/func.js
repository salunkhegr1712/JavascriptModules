exports.givedate = givedate;

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

exports.pie=3.14;
