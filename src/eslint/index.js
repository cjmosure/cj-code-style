const { merge, union } = require('lodash');
const general = require('./general');
const react = require('./react');
const next = require('./next');

// Helper to merge configs while properly combining array properties
const mergeConfigs = (base, ...configs) => {
  const merged = merge({}, base, ...configs);

  // Combine plugins arrays from all configs
  merged.plugins = union(
    base.plugins || [],
    ...configs.map((config) => config.plugins || []),
  );

  // Combine extends arrays from all configs
  merged.extends = union(
    base.extends || [],
    ...configs.map((config) => config.extends || []),
  );

  return merged;
};

const generateEslintConfig = (overrides = {}) => mergeConfigs(general, overrides);

const generateEslintReactConfig = (overrides = {}) => mergeConfigs(general, react, overrides);

const generateEslintNextConfig = (overrides = {}) => mergeConfigs(general, react, next, overrides);

module.exports = {
  generateEslintConfig,
  generateEslintNextConfig,
  generateEslintReactConfig,
};
