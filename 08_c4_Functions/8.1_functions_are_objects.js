// antipattern
var add = new Function('a, b','c', 'return a + b + c');
console.log(add(1, 2, 1)); // returns 3