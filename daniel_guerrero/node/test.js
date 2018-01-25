var express = require('express');

var app = express();

console.log(__dirname);

app.user(express.static(__dirname + '/static'));

app.set(

app.get('/', function(req, res) {
	res.render('index')
});

app.get('testing', function(req, res) {
	res.send('<h1>Hello World/h1>');
});

app.listen(6789, function(){
	console.log("Running on port 6789");
});