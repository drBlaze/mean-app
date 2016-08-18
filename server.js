var http = require('http'),
	path = require('path'),
	express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser');

// Create an Express application
var app = express();

// Creates server
var server = http.createServer(app);

// Log requests to console
app.use(morgan('dev'));

// Parse request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
});

// Send index.html on request
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

var port = process.env.PORT || 3000;
server.listen(port , function() {
	console.log('Server started on port ' + port);
});