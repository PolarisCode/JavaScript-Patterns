var inherit = (function() {
    var F = function() {};
    return function(C, P) {
        F.prototype = P.prototype;
        C.prototype = new F();
        C.prototype.constructor = C;
    }
}());

var Parent = function() {
    this.type = "Human";
}

Parent.prototype.say = function() {
    console.log(this.name + " hello");
}

var Child = function() {
    this.name = "Child";
}

var GrandChild = function() {
    this.name = "GrandChild";
}

inherit(Child, Parent);

var child = new Child();

child.say();

console.log(child.type); // undifined only prototype is inherited

GrandChild.prototype.say = undefined;

child.say();
