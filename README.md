# CJ's Code Style

![ci](https://github.com/cjmosure/cj-code-style/actions/workflows/ci.yml/badge.svg)

A collection of configurations for my personal coding style.

## Eslint

### Install

Install with the package manager of your choosing:

```shell
pnpm add @cjmosure/style
```

### Standard Javascript

```javascript
// .eslintrc.js
const { generateEslintConfig } = require("./src/eslint");

module.exports = generateEslintConfig();
```

### React

```javascript
// .eslintrc.js
const { generateEslintReactConfig } = require("./src/eslint");

module.exports = generateEslintReactConfig();
```

### Extending

You can pass overrides to the `generateEslintConfig()` or `generateEslintReactConfig()` functions as a parameter. Overrides are deep-merged using Lodash merge. For example:

```javascript
// .eslintrc.js
const { generateEslintReactConfig } = require("./src/eslint");

module.exports = generateEslintConfig({
  rules: {
    "@typescript-eslint/no-array-constructor": "off",
  },
});
```

## Future

[ ] Refactor into https://eslint.style/
[ ] fix: @typescript-eslint/no-extra-semi
[ ] Create a install utility that can create an eslint config, install the package, add npm scripts "npx @cjmosure/style init"
