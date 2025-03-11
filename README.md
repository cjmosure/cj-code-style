# CJ's Code Style

![ci](https://github.com/cjmosure/cj-code-style/actions/workflows/ci.yml/badge.svg)

A collection of configurations for my personal coding style.

## Principles

1. Eslint-only, no prettier. Use exlint format on save instead.

### VS Code

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your .vscode/settings.json:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
}
```

### JetBrains IDEs

* Open the Settings dialog (`Ctrl + Alt + S`)
* Go to `Languages & Frameworks -> JavaScript -> Code Quality Tools -> ESLint`
* Select the `Run eslint --fix` on save checkbox.

Refer to [JetBrains Docs](https://www.jetbrains.com/help/idea/eslint.html#ws_eslint_configure_run_eslint_on_save)



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

- Refactor into https://eslint.style/
- fix: @typescript-eslint/no-extra-semi
- Create a install utility that can create an eslint config, install the package, add npm scripts "npx @cjmosure/style init"
- Coverage badge: https://github.com/marketplace/actions/coverage-badge
- Jest coverage reporter: https://github.com/marketplace/actions/jest-coverage-report
