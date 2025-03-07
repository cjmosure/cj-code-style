const { merge } = require("lodash");
const general = require("./general");
const react = require("./react");

const generateEslintConfig = (overrides = {}) => merge(general, overrides);

const generateEslintReactConfig = (overrides = {}) =>
  merge(merge(general, react), overrides);

module.exports = {
  generateEslintConfig,
  generateEslintReactConfig,
};
