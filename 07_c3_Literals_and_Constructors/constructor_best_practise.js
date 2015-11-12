function Employee(){
	if (!(this instanceof Employee)) {
		return new Employee();
	};

	this.age = 0;
	this.printAge = function() {
		console.log(this.age);
	};
}


var emp = Employee();
emp.age = 25;

emp.printAge();

