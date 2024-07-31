module.exports = {
  testPathIgnorePatterns: ['/node_modules/', 'api/', 'e2e/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg|woff|woff2)$':
      '<rootDir>/client/src/__mocks__/file-mock.ts',
    // Plain CSS - match css files that don't end with
    // '.module.css' https://regex101.com/r/VzwrKH/4
    '^(?!.*\\.module\\.css$).*\\.css$':
      '<rootDir>/client/src/__mocks__/style-mock.ts',
  },
  globals: {
    __PATH_PREFIX__: ''
  },
  verbose: true,
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest.transform.cjs'
  },
  roots: ['.'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
};
