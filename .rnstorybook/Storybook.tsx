import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import { view } from './storybook.requires';

import './storybook.requires';

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

export const Storybook = () => {
  return (
    <NavigationContainer>
      <StorybookUIRoot />
    </NavigationContainer>
  );
};
