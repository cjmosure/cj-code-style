const { merge } = require('lodash');
const general = require('./general');
const react = require('./react');
const next = require('./next');

const generateEslintConfig = (overrides = {}) => merge(general, overrides);

const generateEslintReactConfig = (overrides = {}) => merge(general, react, overrides);

const generateEslintNextConfig = (overrides = {}) => merge(general, react, next, overrides);

module.exports = {
  generateEslintConfig,
  generateEslintNextConfig,
  generateEslintReactConfig,
};
