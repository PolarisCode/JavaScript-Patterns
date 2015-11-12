//--------------one param -----------------//

var myFunc = function (param) {
 	if (!myFunc.cache[param]) {
 	var result = {};
 	// ... expensive operation ...
 	myFunc.cache[param] = result;
}
 	return myFunc.cache[param];
};

// cache storage
myFunc.cache = {}



// ---------------------many params ----------------//

var myFunc = function () {
 	var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
 		result;

 	if (!myFunc.cache[cachekey]) {
 		result = {};
 		// ... expensive operation ...
 		myFunc.cache[cachekey] = result;
 	}

 	return myFunc.cache[cachekey];
};

// cache storage
myFunc.cache = {};
