module.exports = {
  extends: '@react-native-community',
  plugins: ['eslint-plugin-import-helpers'],
  root: true,
  rules: {
    'import-helpers/order-imports': [
      'error',
      {
        alphabetize: {
          ignoreCase: true,
          order: 'asc',
        },
        groups: [
          '/^react$/',
          '/^react-native$/',
          '/^react-native/',
          '/^@react/',
          'module',
          '/assets/',
          '/components/',
          '/screens/',
          '/styles/',
          '/utils/',
          ['parent', 'sibling', 'index'],
        ],
        newlinesBetween: 'always',
      },
    ],
    'sort-keys': ['error'],
  },
};
