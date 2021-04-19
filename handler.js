const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: function (origin, callback) {
    callback(undefined, origin);
  }
}

app.post('/', cors(corsOptions), function (req, res) {
  res.send('Hello Post!');
})

module.exports.hello = serverless(app);