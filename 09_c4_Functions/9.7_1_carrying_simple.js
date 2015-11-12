// simple approach 
// carried add()
// accepts partial list of arguments
function add(x, y) {
	if (typeof y === 'undefined') { // partial
		return function (y) {
			return x + y;
		};
	}
	// full function use
	return x + y;
}

var  carriedState = add(10);
console.log(carriedState(5));