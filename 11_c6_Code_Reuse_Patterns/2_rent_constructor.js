//drawbacks
// 1. not inherit prototype properties


//pattern
var Parent = function(name) {
    if (name) {
        this.name = name;
    } else {
        this.name = "untitled";
    };
}

var Child = function(){
	Parent.apply(this, arguments);
}



//usage
var child = new Child();
console.log(child.name);


var child2 = new Child("Imran");
console.log(child2.name);
