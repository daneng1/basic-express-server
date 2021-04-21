'use strict';

const express = require('express');
const app= express();

const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

app.use(express.json());

app.use(logger);

app.get('/person', validator, (req, res) => {
  console.log(`name: ${req.query.name}`);
  res.send({ name: req.query.name });
});

app.get('/hello', (req, res) => {
  console.log(req.query);
  res.send('hello world!');
});

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Server up on ${port}`);
    });
  }
};
