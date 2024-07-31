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
    "@babel/react",
    "@babel/preset-typescript",
  ],
};

module.exports = require("babel-jest").default.createTransformer(babelOptions);
