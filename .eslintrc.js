module.exports = {
  root: true,

  parser: 'babel-eslint',

  plugins: ['react'],

  settings: {
    ecmascript: 6,
    jsx: true
  },

  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier']
};
