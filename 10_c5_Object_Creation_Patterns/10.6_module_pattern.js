MYAPP.namespace('MYAPP.utilities.array');

MYAPP.utilities.array = (function() {
    // dependencies
    var uobj = MYAPP.utilities.object,
        ulang = MYAPP.utilities.lang,
        // private properties
        array_string = "[object Array]",
        ops = Object.prototype.toString,
        // private methods
        inArray = function(haystack, needle) {
            for (var i = 0, max = haystack.length; i < max; i += 1) {
                if (haystack[i] === needle) {
                    return i;
                }
            }
            return− 1;
        },
        isArray = function(a) {
            return ops.call(a) === array_string;
        };

    return {
        inArray: inArray,
        isArray: isArray
    };
}());
