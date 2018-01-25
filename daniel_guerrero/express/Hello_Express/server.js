var express = require("express");

var app = express();


app.get('/', function(request, response){
	response.send("<h1>Hello Express</h1>");
})

app.listen(6789, function() {
	console.log("Listening on port 6789")
})

// =========  vid starts

var http = require('http');
var fs = require('fs');

var server = http.createServer( (req, res) => {
	console.log('client request URL: ', req.url);

	if (req.url === '/'){
		fs.readFile('index.html', 'utf8', (errors, contents) => {
			re.writeHead(200, {'Content-Type': 'text/html'});
			res.write(content);
			res.end();
		})
	}
	else {
		res.writeHead(404);
		res.end('File Not Found');
	}
});

server.listen(6789);

console.log("Running in localhost at port 6789");