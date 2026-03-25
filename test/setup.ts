import './mock-react-native-safe-area-context';
import './mock-react-native-worklets';
import './mock-react-native-reanimated';
import './mock-react-native-netinfo';
import './mock-native-modules';
import './mock-async-storage';
import './mock-uuid';

import { StyleSheet } from 'react-native-unistyles';

import { darkTheme } from '@shared/ui/theme';

// stable keys for react-navigation
jest.mock('nanoid/non-secure', () => ({
  nanoid: () => 'key',
}));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  themes: {
    dark: darkTheme,
    light: darkTheme,
  },
});

declare global {
  let __TEST__: boolean;
}
