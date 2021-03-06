function Gadget() {
    // private member
    var name = 'iPod';
    // public function
    this.getName = function() {
        return name;
    };
}

var toy = new Gadget();
// `name` is undefined, it's private
console.log(toy.name); // undefined

// public method has access to `name`
console.log(toy.getName()); // "iPod"
