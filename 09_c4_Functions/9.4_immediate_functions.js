var util = (function () {

	var greeting = "Hello",

		prepareMessage = function (name) {
			return greeting + " " + name + "!";
		}


	return {
		sayGreeting: prepareMessage
	}
})();


console.log(util.sayGreeting("Imran"));

var utilObj = {
	greeting: "Hello",
	prepareMessage: function (name) {
		return this.greeting + " " + name + "!";
	}
}

utilObj.greeting = "Hi";

console.log(utilObj.prepareMessage("Imran"));