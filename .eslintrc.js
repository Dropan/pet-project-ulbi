module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', 'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  overrides: [{
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off',
    },
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'ulbi-tv-plugin-test',
    'unused-imports',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', 'tsx'],
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // 'no-unused-var': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'linebreak-style': ['error', 'windows'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: [
        'as',
        'role',
        'data-testid',
        'to',
        'target',
        'justify',
        'align',
        'direction',
        'gap',
        'border',
        'feature',
        'color',
        'variant'
      ],
    }],
    'max-len': ['error', {
      ignoreComments: true,
      code: 125,
    }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    'ulbi-tv-plugin-test/path-checker': ['error', { alias: '@' }],
    'ulbi-tv-plugin-test/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'ulbi-tv-plugin-test/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
      },
    ],
    'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    'react/no-unstable-nested-components': 'warn'
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
};
