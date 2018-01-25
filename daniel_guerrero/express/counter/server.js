var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');


app.use(session({
	secret: 'thisisasecret',
	proxy: false,
	resave: true,
	saveUnitialized:true
}));

app.use(bodyParser.urlencoded({extended: true}));

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it


// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 

// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


// lets handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {

	if (session.counter == undefined){
		console.log('undefined')
		session.counter  = 1;
	}
	else{
		session.counter += 1;
	}
	response.render('index', {'count': session.counter});
});
// notice that the function is app.get(...) why do you think the function is called get?

app.post('/reset', function(request, response) {
	session.counter = 0;
	response.redirect('/');
});

// Tell the express app to listen on port 6789
app.listen(6789, function() {
  console.log("Running on port 6789");
});
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
