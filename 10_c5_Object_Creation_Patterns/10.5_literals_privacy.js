var myobj = (function() {
    
    // private members
    var name = "my val";
    
    // implement the public part
    return {
        getName: function() {
            return name;
        }
    };
    
}());


console.log(myobj.getName());
