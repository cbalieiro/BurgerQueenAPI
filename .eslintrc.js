module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    es6: true,
  },
  extends: [
    "airbnb-base",
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
