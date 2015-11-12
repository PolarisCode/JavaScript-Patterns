// drawbacks:
// 1. cannot send parameter to constructor
// 2. properties are duplicated with the same name

function inherit(child, parent) {
    child.prototype = new parent();
}

var Parent = function() {
    this.name = "Adam";
}

Parent.prototype.say = function() {
    console.log(this.name + " hello");
}

var Child = function() {
    this.name = "John";
}

inherit(Child, Parent);

var child = new Child();

child.say();

delete child.name;

child.say();