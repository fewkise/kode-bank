import 'react-native-get-random-values';
import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import { AppRegistry } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { darkTheme } from '@shared/ui/theme';

import { Root as Dev } from './app.dev';
import { name as appName } from './app.json';
import { Root as Prod } from './app.prod';

const App = __DEV__ ? Dev : Prod;

AppRegistry.registerComponent(appName, () => App);

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  themes: {
    dark: darkTheme,
    light: darkTheme,
  },
});
