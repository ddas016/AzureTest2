'use strict';

var port = process.env.PORT || 8000; // first change

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var server = http.createServer(app);

app.use(bodyParser.json());


server.listen(port, function () { // fifth and final change
  console.log('started');
});

app.get('/ping', function (req, res) {
 res.send('pong from me');
});