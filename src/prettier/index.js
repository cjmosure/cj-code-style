const { merge } = require('lodash');
const general = require('./general');

const generatePrettierConfig = (overrides = {}) => merge(general, overrides);

module.exports = {
  generatePrettierConfig,
};
