function schonfinkelize(fn) {
	var slice = Array.prototype.slice,
		stored_args = slice.call(arguments, 1);
	return function () {
		var new_args = slice.call(arguments),
			args = stored_args.concat(new_args);
		return fn.apply(null, args);
	};
}

// a normal function
function add(x, y) {
 return x + y;
}

// curry a function to get a new function
var newadd = schonfinkelize(add, 5);
var result = newadd(4); // 9

console.log(result);

