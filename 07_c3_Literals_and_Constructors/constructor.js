var Person = function (name) {
	this.name = name;
	this.say = function () {
 		return "I am " + this.name;
	};

};

console.log(new Person("Imran"));

