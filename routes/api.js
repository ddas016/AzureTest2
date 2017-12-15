import express from 'express';

const app = express.Router();

app.get('/ping', (req, res) => {
    res.send({ "status": "I DID IT"});
  });
module.exports =  app ;

// dummy update to test commit