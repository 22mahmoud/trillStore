module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  rootDir: '../../',
  modulePaths: ['<rootDir>/packages/server/src', '<rootDir>/packages/server/test'],
  resetModules: true,
  moduleNameMapper: {
    '^mongoose$': '<rootDir>/node_modules/mongoose',
  },
};
