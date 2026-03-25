const { getDefaultConfig } = require('@react-native/metro-config');
const path = require('path');
const {
  withStorybook,
} = require('@storybook/react-native/metro/withStorybook');

const config = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

module.exports = withStorybook(config, {
  // set to false to disable storybook specific settings
  // you can use a env variable to toggle this
  enabled: true,
  // path to your storybook config folder
  configPath: path.resolve(__dirname, './.rnstorybook'),
});
