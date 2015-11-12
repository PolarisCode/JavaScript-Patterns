var scareMe = function () {
 	alert("Boo!");
 	scareMe = function () {
 		alert("Double boo!");
 	};
};

// using the self-defining function
scareMe(); // Boo!
scareMe(); // Double boo!