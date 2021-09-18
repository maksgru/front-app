module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'],
  plugins: ['react', 'styled-components-config', 'eslint-plugin-no-inline-styles', '@typescript-eslint'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/no-unused-state': 2,
    'react/no-access-state-in-setstate': 2,
    'react/no-direct-mutation-state': 2,
    'eol-last': ['error', 'always'],
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error'],
    'no-plusplus': 'off',
    'no-param-reassign': ['error', { props: false }],
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'comma-dangle': ['error', 'never'],
    'prefer-destructuring': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'no-restricted-syntax': 'off',
    'styled-components-config/rule-name': 'off',
    camelcase: 'off',
    'no-continue': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/display-name': 'off',
    'consistent-return': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'no-inline-styles/no-inline-styles': 2,
    'quote-props': 2,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 'off'
  }
};
