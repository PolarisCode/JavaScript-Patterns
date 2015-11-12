var getData = function(){
	var ajax = SIMSIGHT.modules.asyncRequest,
		logger = SIMSIGHT.modules.logger;

	var data = ajax.sendRequest('url');

	drawDiagram(data, logger);
},

	drawDiagram = function(data, logger){
		//abstract implementation;

		logger.log("diagram rendered");
	};