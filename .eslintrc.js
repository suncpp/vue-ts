/*
 * @Author: CaoPengpeng
 * @since: 2021-02-04 10:21:42
 * @LastAuthor: CaoPengpeng
 * @lastTime: 2021-02-19 15:08:10
 * @文件相对于项目的路径: /vue3-test-project/.eslintrc.js
 * @message: 
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-unused-vars": "off"
  }
}
