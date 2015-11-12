var validator = {
    types: {},
    messages: [],
    config: {},

    validate: function(data) {
        var i, msg, type, checker, result_ok;

        this.messages = [];

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];

                if (!type) {
                    continue; // no need to validate
                }

                if (!checker) {
                    throw {
                        name: "ValidationError",
                        message: "No handler to validate type " + type
                    };
                }

                result_ok = checker.validate(data[i]);

                if (!result_ok) {
                    msg = "Invalid value for *" + i + "*, " + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }

        return this.isValid();
    },

    isValid: function() {
        return this.messages.length === 0;
    }
};

validator.types.isNonEmpty = {
    validate: function(value) {
        return value != "";
    },
    instructions: "Field could not be empty"
};

validator.types.isNumber = {
    validate: function(value) {
        return !isNaN(value);
    },
    instructions: "Field accepts only numbers"
};

validator.types.IsAlphaNum = {
    validate: function(value) {
        return !/[^a-z0-9]/i.test(value);
    },
    instructions: "Field should be alpha-numeric"
};


// using
var data = {
    first_name: "Imran",
    last_name: "Aliyev",
    age: "10",
    username: "ab12"
};

validator.config = {
    first_name: "isNonEmpty",
    age: "isNumber",
    username: "IsAlphaNum"
};


var isValid = validator.validate(data);

console.log(isValid);
