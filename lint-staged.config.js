/**
 * This file is used by `lint-staged` to configure the linters to be used in pre-commit hook.
 * @see https://github.com/okonet/lint-staged#configuration
 */

module.exports = {
  /** Typechecking, runs only once */
  '*': () =>
    'tsc --noEmit -p ./tsconfig.json --pretty',

  /** Linting */
  '**/*.{ts,tsx}': [
    'prettier --write',
    'eslint --ext .js,.jsx,.ts,.tsx',
  ],

  /** Testing */
  '**/*.{test.ts,test.tsx}': [
    'jest --bail --findRelatedTests --passWithNoTests',
  ],
}
