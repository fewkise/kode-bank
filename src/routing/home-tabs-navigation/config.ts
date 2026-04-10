import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets as UseSafeAreaInsets } from 'react-native-safe-area-context';
import { useUnistyles as UseUnistyles } from 'react-native-unistyles';

export const homeTabsOptions = (): BottomTabNavigationOptions => {
  const insets = UseSafeAreaInsets();
  const { theme } = UseUnistyles();
  return {
    tabBarInactiveTintColor: theme.palette.text.secondary,
    tabBarActiveTintColor: theme.palette.accent.secondary,
    headerTintColor: theme.palette.text.primary,
    tabBarLabelStyle: {
      fontFamily: theme.typography.caption2.fontFamily,
      fontSize: theme.typography.caption2.size,
      lineHeight: theme.typography.caption2.lineHeight,
      letterSpacing: theme.typography.caption2.letterSpacing,
    },
    tabBarStyle: {
      paddingTop: 11,
      paddingBottom: 6 + insets.bottom,
      height: theme.spacing(7) + insets.bottom,
      backgroundColor: theme.palette.background.primary,
    },
    headerStyle: {
      backgroundColor: theme.palette.background.primary,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
  };
};
