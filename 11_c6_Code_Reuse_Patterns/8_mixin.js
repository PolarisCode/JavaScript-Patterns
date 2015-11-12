function mix() {
    var i, prop, child = {};

    for (i = 0; i < arguments.length; i++) {
        for (prop in arguments[i]) {
            child[prop] = arguments[i][prop];
        }
    };

    return child;
}

var child = mix({name: "Imran"}, {age: "30"});

console.log(child.name);
console.log(child.age);
