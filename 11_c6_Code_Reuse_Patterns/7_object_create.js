var parent  = {
	age: 50,
	getAge: function(){
		return this.age;
	}
};


var child  = Object.create(parent);

console.log(child.age);
console.log(child.getAge());
