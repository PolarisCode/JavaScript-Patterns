var dog = {};
dog.name = "Benji";
dog.getName = function () {
 return dog.name;
};

console.log(dog.getName());