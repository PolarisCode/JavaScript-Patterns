var timer = (function() {
    var observers = [],
    	intervalId,

        subscribeToTime = function(fn) {
            observers.push(fn);
        },

        unsubscriberFromTime = function(fn) {
            observers = observers.filter(
                function(observer) {
                    if (observer !== fn) {
                        return observer;
                    }
                });
        },

        signalTime = function() {
            observers.forEach(function(observer) {
                observer(new Date());
            });
        },

        stop = function() {
        	console.log("stopped");
            clearTimeout(intervalId);
        },


        start = function() {
        	console.log("started");
            intervalId = setInterval(signalTime, 1000);
        };

    return {
        subscribe: subscribeToTime,
        unsubscribe: unsubscriberFromTime,
        stop: stop,
        start: start
    }
})();

//using
var listener = function(time) {
    console.log(time);
};

var unsubscribeListener = function(){
	console.log("unsubscribed");
	timer.unsubscribe(listener);
}


timer.subscribe(listener);

timer.start();

setTimeout(unsubscribeListener, 5000);

setTimeout(timer.stop,8000);
