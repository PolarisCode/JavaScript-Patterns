var Human = function() {

	this.name = "Human";

	this.getName = function(greeting){
		return this.name + " " + greeting;
	}
}

var Person  = function(){
	this.name = "Person";
}


console.log(new Human().getName.call(new Person(), "hello"));
console.log(new Human().getName.apply(new Person(), ["hello"]));