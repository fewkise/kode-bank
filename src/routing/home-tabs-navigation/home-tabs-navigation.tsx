import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BankMain } from '@pages/bank';
import { HomeMain } from '@pages/home';
import { ProfileMain } from '@pages/profile';
import { IconBank, IconCamera1, IconMainProduct } from '@shared/ui/icons';

import { homeTabsOptions } from './config';
import { HomeTabsParamsList } from './types';

const HomeTabs = createBottomTabNavigator<HomeTabsParamsList>();

export const HomeTabsNavigation = () => {
  return (
    <HomeTabs.Navigator
      initialRouteName="HomeMain"
      screenOptions={homeTabsOptions()}
    >
      <HomeTabs.Screen
        options={{
          title: 'Главная',
          tabBarIcon: IconMainProduct,
        }}
        name="HomeMain"
        component={HomeMain}
      />
      <HomeTabs.Screen
        options={{
          title: 'Банкоматы',
          tabBarIcon: IconBank,
        }}
        name="BankMain"
        component={BankMain}
      />
      <HomeTabs.Screen
        options={{
          title: 'Профиль',
          tabBarIcon: IconCamera1,
        }}
        name="ProfileMain"
        component={ProfileMain}
      />
    </HomeTabs.Navigator>
  );
};
