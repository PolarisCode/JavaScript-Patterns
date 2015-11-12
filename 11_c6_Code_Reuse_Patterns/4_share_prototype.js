// drawback: granchild can modify parents

function inherit(Child, Parent){
	Child.prototype = Parent.prototype;
}

var Parent = function(){
	this.name = "Adam";
}


Parent.prototype.say = function(){
	console.log(this.name +  " hello");
}


var Child = function(){
	this.name = "Child";
}



var GrandChild = function(){
	this.name = "GrandChild";
}


inherit(Child, Parent);
inherit(GrandChild, Child);




var child = new Child();

child.say();

var gchild = new GrandChild();

gchild.say();

GrandChild.prototype.say = function(){
	console.log("Hi everyone!!!");
}

child.say();




