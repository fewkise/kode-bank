import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { View } from 'react-native';
import { useUnistyles as UseUnistyles } from 'react-native-unistyles';

import { IconBack } from '@shared/ui/icons';
export const useDefaultStackScreenOptions = (): StackNavigationOptions => {
  const { theme } = UseUnistyles();
  return {
    headerTitleStyle: {
      fontFamily: theme.typography.subtitle.fontFamily,
      fontSize: theme.typography.subtitle.size,
      lineHeight: theme.typography.subtitle.lineHeight,
      letterSpacing: theme.typography.subtitle.letterSpacing,
      color: theme.palette.text.primary,
    },
    headerBackImage: () => (
      <View
        style={{
          paddingLeft: theme.spacing(2),
          paddingVertical: theme.spacing(1),
        }}
      >
        <IconBack color={theme.palette.text.primary} />
      </View>
    ),
    headerBackButtonDisplayMode: 'minimal',
    headerStyle: {
      backgroundColor: theme.palette.background.primary,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerTitleAlign: 'center',
    headerMode: 'screen',
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
};
