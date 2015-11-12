var o = new Object();
console.log(o.constructor === Object); // true
// объект­число
var o = new Object(1);
console.log(o.constructor === Number); // true
console.log(o.toFixed(2));  // “1.00”
// объект­строка
var o = new Object("I am a string");
console.log(o.constructor === String); // true
// обычные объекты не имеют метода substring()
// зато этот метод имеется у объектов­строк
console.log(typeof o.substring); // “function”