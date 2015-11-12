// APPROACH 1
// INSTANCE IN STATIC PROPERTY

function Database() {
    if (typeof Database.instance === "object") {
        return Database.instance;
    };

    this.connectionName = "public";
    this.connnectionString = "someString";


    Database.instance = this;

    return this;
}

//checking for the same instance

var db1 = new Database();
var db2 = new Database();

console.log(db1 === db2);


// APPROACH 2
// INSTANCE IN CLOSURE

function Database2() {

    var instance = this;

    this.connectionName = "public";
    this.connnectionString = "someString";


    Database2 = function() {
        return instance;
    }
}


var db3 = new Database2();
var db4 = new Database2();

console.log(db3 === db4);
