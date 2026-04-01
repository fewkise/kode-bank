import { createStackNavigator } from '@react-navigation/stack';

import {
  PaymentCreate,
  PaymentServices,
  PaymentConfirmScreen,
  PaymentStatus,
} from '@pages/payment';
import { HomeTabsNavigation } from '@routing/home-tabs-navigation';

import { rootStackOptions } from './config';
import { RootStackParamsList } from './types';

const RootStack = createStackNavigator<RootStackParamsList>();

export const AppNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="HomeTabs"
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
        name="paymentStatus"
        component={PaymentStatus}
        options={{ headerTitle: 'Статус платежа' }}
      />
      <RootStack.Screen
        name="paymentConfirm"
        component={PaymentConfirmScreen}
        options={{ headerTitle: 'Подтверждение' }}
      />
      <RootStack.Screen
        name="paymentCreate"
        component={PaymentCreate}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
    </RootStack.Navigator>
  );
};
