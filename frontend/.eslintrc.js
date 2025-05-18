module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-deprecated-slot-scope-attribute': 'off'
  }
}
