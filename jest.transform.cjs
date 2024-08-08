const babelOptions = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: 18,
        },
      },
    ],
    ["@babel/react", {
      "runtime": "automatic"
    }],
    "@babel/preset-typescript",
  ],
};

module.exports = require("babel-jest").default.createTransformer(babelOptions);
