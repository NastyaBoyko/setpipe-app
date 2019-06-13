var express = require('express');
var bodyParser = require('body-parser');
var todoController = require('./controllers/pipeController');
// var path = require('path');

var app = express();

app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));
// app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());

//set up controllers
todoController(app);

//listening
app.listen(3000);
console.log('Listening to port 3000');
