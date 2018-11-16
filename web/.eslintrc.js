module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
  },
  globals: {
    localStorage: true,
    window: true,
    document: true,
  },
};
