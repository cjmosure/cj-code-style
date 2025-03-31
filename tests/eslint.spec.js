const { generateEslintConfig, generateEslintReactConfig } = require('../src/eslint');

describe('eslint config', () => {
  describe('general', () => {
    it('should not throw an error', () => {
      expect(() => generateEslintConfig()).not.toThrow();
    });
    it('should merge overrides', () => {
      const config = generateEslintConfig({
        rules: {
          'no-delete-var': 'off',
        },
      });
      expect(config).toHaveProperty('rules.no-delete-var', 'off');
    });
  });
  describe('react', () => {
    it('should not throw an error', () => {
      expect(() => generateEslintReactConfig()).not.toThrow();
    });
    it('should deep merge with general', () => {
      const config = generateEslintReactConfig();
      expect(config['rules']['perfectionist/sort-imports'][1]['custom-groups']['value']['react']).toEqual(['react', 'react-dom']);
      expect(config.plugins).toContain('react-hooks');
    });
  });
});
