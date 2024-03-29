'use strict';

const validator = (req, res, next) => {
  req.query.name ? next() : next('Please enter a name');
};

module.exports = validator;
