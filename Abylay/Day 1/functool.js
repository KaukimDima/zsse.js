var arr=[1,4,5,8,7,3,81,2,3];
var res=arr.map(function(item) {return item*item;}).
filter(function(number) {return number > 50;}).
reduce(function(sum, current) {return sum + current}, 0);
console.log(res);