function CarMaker() {}


CarMaker.prototype.drive = function(){
	return console.log("I have " + this.doors + " doors");
}

CarMaker.factory = function(type){
	var constr = type,
		newcar;

	if (typeof CarMaker[constr]!=="function") {
		throw {
			name: "Error",
			message: constr + " doesn't exist"
		}
	};

	if (typeof CarMaker[constr].prototype.drive!=="function") {
		CarMaker[constr].prototype = new CarMaker();
	};

	newcar = new CarMaker[constr]();

	return newcar;
}

CarMaker.Sedan = function(){
	this.doors = 4;
}

CarMaker.SUV = function(){
	this.doors = 5
}

CarMaker.Motorbike = function(){
	this.doors = 2; 
}



var jeep =  CarMaker.factory("SUV");
var sonata = CarMaker.factory("Sedan");
var suzuki = CarMaker.factory("Motorbike");

jeep.drive();
sonata.drive();
suzuki.drive();

console.log(jeep.factory);

