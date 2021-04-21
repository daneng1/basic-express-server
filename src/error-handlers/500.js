'use strict';

function errorHandler(err, req, res) {
  res.status(500).send('Whoops, you encountered an error!');
}

module.exports = errorHandler;
