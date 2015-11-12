function Gadget() {
    // private member
    var specs = {
        screen_width: 320,
        screen_height: 480,
        color: "white"
    };
    // public function
    this.getSpecs = function() {
        return specs;
    };
}

var toy = new Gadget();


console.log(toy.getSpecs());
