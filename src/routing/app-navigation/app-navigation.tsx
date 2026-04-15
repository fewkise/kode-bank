import { createStackNavigator } from '@react-navigation/stack';
import { useUnit } from 'effector-react';

import { $authStore } from '@features/auth/model/auth';
import { AuthNavigation } from '@routing/auth-navigation';
import { HomeTabsNavigation } from '@routing/home-tabs-navigation';
import { useDefaultStackScreenOptions } from '@routing/lib/hooks/use-default-stack-screen-options';

import { PaymentConfirmScreen } from './screens/payment-confirm-screen';
import { PaymentCreateScreen } from './screens/payment-create-screen';
import { PaymentServicesScreen } from './screens/payment-services-screen';
import { PaymentStatusScreen } from './screens/payment-status-screen';
import { RootStackParamsList } from './types';

const RootStack = createStackNavigator<RootStackParamsList>();

export const AppNavigation = () => {
  const screenOptions = useDefaultStackScreenOptions();
  const { accessToken } = useUnit($authStore);
  return (
    <RootStack.Navigator screenOptions={screenOptions}>
      {accessToken ? (
        <>
          <RootStack.Screen
            name="HomeTabs"
            component={HomeTabsNavigation}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="paymentServices"
            component={PaymentServicesScreen}
            options={{ headerTitle: 'Мобильная связь' }}
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
        </>
      ) : (
        <RootStack.Screen
          name="AuthNavigation"
          component={AuthNavigation}
          options={{ headerShown: false }}
        />
      )}
    </RootStack.Navigator>
  );
};
