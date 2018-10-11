module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  modulePaths: ['<rootDir>/src', '<rootDir>/test'],
  resetModules: true,
  moduleNameMapper: {
    '^mongoose$': '<rootDir>/node_modules/mongoose',
  },
};
