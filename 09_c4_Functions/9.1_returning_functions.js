var setup = function () {
 	var count = 0;
 	return function () {
 		return (count += 1);
 	};
};

// usage
var next = setup(); // function
console.log(next()); // returns 1
console.log(next()); // 2
console.log(next()); // 3