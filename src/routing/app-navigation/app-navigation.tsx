import { createStackNavigator } from '@react-navigation/stack';

import { PaymentCreate, PaymentServices } from '@pages/payment';
import { HomeTabsNavigation } from '@routing/home-tabs-navigation';

import { rootStackOptions } from './config';
import { RootStackParamsList } from './types';

const RootStack = createStackNavigator<RootStackParamsList>();

export const AppNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="paymentServices"
      screenOptions={rootStackOptions}
    >
      <RootStack.Screen
        name="HomeTabs"
        component={HomeTabsNavigation}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="paymentServices"
        component={PaymentServices}
        options={{ headerTitle: 'Мобильная связь' }}
      />
      <RootStack.Screen
        name="paymentCreate"
        component={PaymentCreate}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
    </RootStack.Navigator>
  );
};
