var express = require('express'),
app = express(),
cors = require('cors'),
port = process.env.PORT || 3001;
bodyParser = require('body-parser');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('*', cors(corsOptions)) // include before other routes


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Funsurance RESTful API server started on: ' + port);
