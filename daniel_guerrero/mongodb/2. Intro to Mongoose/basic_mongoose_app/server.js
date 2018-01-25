var mongoose = require('mongoose');

var express      =  require('express'),
	app          = express(),
	routes       = require('./server/config/routes'),
	port         = 6789;
	path         = require('path'),
	mongoose     = require('mongoose'),
	bodyParser   = require('body-parser',)
	session      = require('express-session'),

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/client/views'));
app.use(express.static(path.join(__dirname, '/client/static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	secret: 'thisisasecret',
	proxy: false,
	resave: true,
	saveUnitialized: true
}));


//============       MONGOOSE CONNECTION      =================
mongoose.connect('mongodb://localhost/dashboard')

//=================       ROUTES      ======================
routes(app);

//=================       LISTENING      ======================
app.listen(port, function() {
	console.log(`Running on port ${port}`);
})