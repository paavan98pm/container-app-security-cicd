'use strict';

var nil = require('is-nil');

module.exports = function (options) {

  if (nil(options) || nil(options.likelihood)) {
    return Math.random() >= 0.5;
  }

  return Math.random() * 100 < options.likelihood;
};
