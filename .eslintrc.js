module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'plugin:react-hooks/recommended',
    '@react-native-community',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  ignorePatterns: [
    '.eslintrc.js',
    'tsconfig.json',
    'node.tsconfig.json',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
    '.commitlintrc.js',
    'lint-staged.config.js',
    'package.json',
    'yarn.lock',
    'ios/*',
    'android/*',
    'patches/*',
    'Gemfile',
    'Gemfile.lock',
    '*.md',
    'scripts',
    'plop-templates/*',
    'plopfile.js',
    'index.js',
    '*.json',
    '*.png',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'prettier',
    'import',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-undef': 'off',
        'import/order': [
          'error',
          {
            // Выносим алиасы от TS в отдельную группу internal
            pathGroups: [
              {
                pattern:
                  '@*(shared|entities|features|widgets|pages|routing|processes|app)/**',
                group: 'internal',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            groups: [
              ['builtin', 'external'],
              'internal',
              ['parent', 'sibling', 'index'],
              'type',
              'object',
            ],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
    {
      files: ['**/*.story.*'],
      rules: {
        'import/no-unresolved': 'off',
        'react-native/no-inline-styles': 'off',
      },
    },
    {
      files: ['src/shared/api/**/*.ts'],
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'eslint-comments/no-unused-disable': 'off',
      },
    },
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
  },
  rules: {
    'prettier/prettier': ['error'],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-shadow': 'off',
  },
};
