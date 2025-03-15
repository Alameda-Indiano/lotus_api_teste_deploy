module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
  },
  extends: 'standard',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'space-in-parens': ['error', 'always']
  }
}
