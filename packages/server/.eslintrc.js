module.exports = {
  extends: ['plugin:jest/recommended', 'airbnb-base'],
  plugins: ['jest'],
  settings: {
    'import/resolver': {
      jest: {
        jestConfigFile: './jest.config.js',
      },
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
