'use strict';

var port = process.env.PORT || 8000; // first change
var api = require('./routes/api');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var server = http.createServer(app);

app.use(bodyParser.json());
app.use('/', api);

server.listen(port, function () { // fifth and final change
  console.log('started');
});
