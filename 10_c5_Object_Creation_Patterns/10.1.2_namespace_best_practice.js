SIMSIGHT = {};

SIMSIGHT.namespace = function(str){
	var parts = str.split("."),
		parent = SIMSIGHT,
		i;

	if (parts[0]==="SIMSIGHT") {
		parts = parts.slice(1);
	};

	for (i=0; i < parts.length; i+=1) {
		if (typeof parent[parts[i]] ==="undefined") {
			parent[parts[i]] = {};
		};

		parent = parent[parts[i]];
	};

	return parent;
}


var asyncRequest =  SIMSIGHT.namespace("SIMSIGHT.modules.asyncRequest");


asyncRequest.sendRequest = function (){
	console.log("request sent");
}


asyncRequest.sendRequest();