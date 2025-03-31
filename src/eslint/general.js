module.exports = {
  extends: ['plugin:perfectionist/recommended-natural'],
  ignorePatterns: [
    '**/node_modules',
    '**/dist',
    '**/.yalc',
    '**/.circleci',
    '**/test-results',
    '*.html',
    '**/docs',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    '@stylistic',
    '@typescript-eslint',
    'import',
    'unused-imports',
    'perfectionist',
    'no-only-tests',
  ],
  rules: {
    // Stylistic
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/array-element-newline': ['error', 'consistent'],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/block-spacing': 'error',
    '@stylistic/brace-style': 'error',
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-spacing': 'error',
    '@stylistic/comma-style': ['error', 'last'],
    '@stylistic/computed-property-spacing': ['error', 'never'],
    '@stylistic/curly-newline': ['error', 'always'], // revisit
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/function-paren-newline': ['error', 'multiline'],
    '@stylistic/generator-star-spacing': ['error', {'after': true, 'before': false}],
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/indent-binary-ops': ['error', 2],
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-multiple-empty-lines': 'error',
    '@stylistic/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: 'always',
        avoidEscape: true,
      },
    ],

    // Typescript

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
    ],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-empty-object-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-restricted-types': [
      'error',
      {
        types: {
          '{}': 'Avoid using the empty object type `{}`.',
          Boolean: {
            fixWith: 'boolean',
            message: "Use 'boolean' instead.",
          },
          Function: 'Avoid using the `Function` type because it provides no type safety.',
          Number: {
            fixWith: 'number',
            message: "Use 'number' instead.",
          },
          Object: {
            fixWith: 'object',
            message: "Use 'object' instead.",
          },
          String: {
            fixWith: 'string',
            message: "Use 'string' instead.",
          },
          Symbol: {
            fixWith: 'symbol',
            message: "Use 'symbol' instead.",
          },
        },
      },
    ],
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unsafe-function-type': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-wrapper-object-types': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    'arrow-body-style': ['error', 'as-needed'],

    // ES6

    'constructor-super': 'error',
    curly: ['error', 'multi-or-nest', 'consistent'],

    // Best Practices

    'default-case-last': 'error',
    eqeqeq: 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-default-export': 'error',

    // Imports and exports

    'import/no-duplicates': 'error',
    'no-await-in-loop': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',

    // Variables

    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-multi-spaces': 'error',
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',

    // Unit tests

    'no-only-tests/no-only-tests': 'error',
    'no-promise-executor-return': 'error',
    'no-regex-spaces': 'error',
    'no-self-assign': 'error',
    'no-setter-return': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'off',
    'no-this-before-super': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-labels': 'error',
    'no-useless-backreference': 'error',
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    'no-with': 'error',
    'object-shorthand': 'error',
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'side-effect',
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'style',
          'object',
          'unknown',
        ],
        'newlines-between': 'always',
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        'group-kind': 'values-first',
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        'group-kind': 'values-first',
        order: 'asc',
        type: 'natural',
      },
    ],
    radix: 'error',
    'require-yield': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'use-isnan': 'error',
    'valid-typeof': 'error',
    yoda: 'error',
  },
};
