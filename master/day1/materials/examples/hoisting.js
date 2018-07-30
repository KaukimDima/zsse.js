function sum() {
  return a + b;
}
var a = 10,
  b = 10;
sum(); //вернет 20
// -------------------------------------
function sum() {
    return a + b;
}
a = 10;
b = 10;
sum(); //вернет 20
// -------------------------------------

function sum() {
    return a + b;
}
sum(); //вернет NaN
var a = 10,
b = 10;
// -------------------------------------

var a = 10,
  b = 10;
sum(); //вернет 20
function sum() {
  return a + b;
}

// -------------------------------------

var a = 10,
  b = 10;

sum(); //ошибка!

var sum = function() {
  return a + b;
};
