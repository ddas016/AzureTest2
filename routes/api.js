var express = require('express');
var app = express.Router();

app.get('/ping', (req, res) => {
    res.send({ "status": "I DID IT"});
  });
module.exports =  app ;