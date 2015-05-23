var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
require('./config/mongoose.js');
app.use(bodyParser.json());
require('./config/routes.js')(app);

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));

app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});