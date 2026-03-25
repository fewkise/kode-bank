process.env.TZ = 'UTC';
process.env.LANG = 'en_US.UTF-8';

const queryStringDeps = [
  'query-string',
  'decode-uri-component',
  'split-on-first',
  'filter-obj',
].join('|');

module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    '<rootDir>/node_modules/react-native/jest/setup.js',
    'react-native-unistyles/mocks',
    '<rootDir>/test/setup.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(jest-)?react-native|flat|react-native|@react-navigation|@storybook|@react-native|axios|${queryStringDeps})`,
  ],
};
