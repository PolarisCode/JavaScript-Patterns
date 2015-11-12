//drawbacks
// 1. Parent constructor fired 2 times
// 2. Parent properties inherited 2 times
//pattern
var Parent = function(name) {
    if (name) {
        this.name = name;
    } else {
        this.name = "untitled";
    };
}

Parent.prototype.say = function(){
	console.log(this.name + " hello");
}

var Child = function(){
	Parent.apply(this, arguments);
}

Child.prototype = new Parent();


var child = new Child("Imran");

child.say();

delete child.name;

child.say(); // 2 times inheritance
