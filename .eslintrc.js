module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  },
  globals: {
    document: false
  }
}
