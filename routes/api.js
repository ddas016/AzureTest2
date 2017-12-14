var express = require('express');
var app = express.Router();

app.get('/ping', function (req, res) {
    res.send({ "status": "I DID IT"});
  });
module.exports =  app ;