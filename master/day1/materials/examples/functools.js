var arr = [1, 2, 3, 4, 5]


var result = arr.reduce(function(sum, current) {
  return sum + current
}, 0);


var arr = ["Мишина", "Дом", "Телефон"];

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});

var names = ['Js', 'React', 'Node.js'];

var nameLengths = names.map(function(name) {
  return name.length;
});

var arr = [1,2,3,4,5,6,-1,-2,-4,-5,-6,-7];

var pos_arr = arr.filter(function(number) {
  return number > 0;
});

