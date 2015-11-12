var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {

    response.statusCode = 200;

    var contentLength = request.headers["content-length"];
    var uploadedLength = 0;
    var file = fs.createWriteStream('newFile.txt');

    request.on('data', function(chunk) {
        var progress;

        if (chunk != null) {
            uploadedLength += chunk.length;
            progress = uploadedLength / contentLength * 100;
            file.write("Uploaded " + parseInt(progress, 10) + "\n");
        };

    });

    request.on('end', function() {
        response.end('file uploaded');
    });
});


server.listen(8080);
