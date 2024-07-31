module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "api/", "e2e/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg|woff|woff2)$":
      "<rootDir>/src/__mocks__/file-mock.ts",
    // Plain CSS - match css files that don't end with
    // '.module.css' https://regex101.com/r/VzwrKH/4
    "^(?!.*\\.module\\.css$).*\\.css$":
      "<rootDir>/src/__mocks__/style-mock.ts",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@styles(.*)$": "<rootDir>/src/styles$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
  },
  globals: {
    __PATH_PREFIX__: "",
  },
  verbose: true,
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest.transform.cjs",
  },
  roots: ["."],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
};
