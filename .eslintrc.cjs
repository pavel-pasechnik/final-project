module.exports = {
  root: true,
  env: { node: true, browser: true, es2024: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:react-redux/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    parser: ['@babel/eslint-parser'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: '18.2' },
  },
  plugins: ['react-refresh', 'jsx-a11y', 'react-redux'],
  rules: {
    'no-console': 0,
    'react/prop-types': 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
  globals: {
    getApp: false,
    Page: false,
    wx: false,
    App: false,
    getCurrentPages: false,
    Component: false,
  },
};
