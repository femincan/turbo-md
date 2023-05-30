module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: null,
    tsConfigRootDir: './',
  },
  plugins: ['react-refresh', '@typescript-eslint', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function'] },
    ],
    'react/require-default-props': 0,
    'import/extensions': [2, 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['*.config.{js,ts}'] },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
