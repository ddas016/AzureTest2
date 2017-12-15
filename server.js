'use strict';
import api from './routes/api';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const port = process.env.PORT || 8000; // first change
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use('/', api);


server.listen(port, () => { // fifth and final change
  console.log('started');
});
