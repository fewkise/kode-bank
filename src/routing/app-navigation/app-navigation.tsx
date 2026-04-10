import { createStackNavigator } from '@react-navigation/stack';

import { HomeTabsNavigation } from '@routing/home-tabs-navigation';

import { rootStackOptions } from './config';
import { PaymentConfirmScreen } from './screens/payment-confirm-screen';
import { PaymentCreateScreen } from './screens/payment-create-screen';
import { PaymentServicesScreen } from './screens/payment-services-screen';
import { PaymentStatusScreen } from './screens/payment-status-screen';
import { RootStackParamsList } from './types';

const RootStack = createStackNavigator<RootStackParamsList>();

export const AppNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={rootStackOptions()}
    >
      <RootStack.Screen
        name="HomeTabs"
        component={HomeTabsNavigation}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="paymentServices"
        component={PaymentServicesScreen}
        options={({ route }) => ({ headerTitle: route.params.serviceName })}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name="paymentStatus"
        component={PaymentStatusScreen}
      />
      <RootStack.Screen
        name="paymentConfirm"
        component={PaymentConfirmScreen}
        options={{ headerTitle: 'Подтверждение' }}
      />
      <RootStack.Screen
        name="paymentCreate"
        component={PaymentCreateScreen}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
    </RootStack.Navigator>
  );
};
