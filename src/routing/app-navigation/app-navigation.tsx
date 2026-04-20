import { createStackNavigator } from '@react-navigation/stack';
import { useMemo } from 'react';

import { useAuthState } from '@features/auth/hooks/use-auth-state';
import { useLoggedIn } from '@features/auth/hooks/use-logged-in';
import { AuthNavigation } from '@routing/auth-navigation';
import { HomeTabsNavigation } from '@routing/home-tabs-navigation';
import { useDefaultStackScreenOptions } from '@routing/lib/hooks/use-default-stack-screen-options';
import { getAppState } from '@routing/lib/utils/get-app-state';

import { PaymentConfirmScreen } from './screens/payment-confirm-screen';
import { PaymentCreateScreen } from './screens/payment-create-screen';
import { PaymentServicesScreen } from './screens/payment-services-screen';
import { PaymentStatusScreen } from './screens/payment-status-screen';
import { RootStackParamsList } from './types';

const RootStack = createStackNavigator<RootStackParamsList>();

export const AppNavigation = () => {
  const screenOptions = useDefaultStackScreenOptions();
  const { loggedIn } = useLoggedIn();
  const authState = useAuthState();
  const appState = getAppState({
    authState,
    loggedIn,
  });
  const flow = useMemo(() => {
    switch (appState) {
      case 'auth':
        return (
          <RootStack.Screen
            name="AuthNavigation"
            component={AuthNavigation}
            options={{ headerShown: false }}
          />
        );
      case 'unlocked':
        return (
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
        );
      default:
        return (
          <RootStack.Screen
            name="AuthNavigation"
            component={AuthNavigation}
            options={{ headerShown: false }}
          />
        );
    }
  }, [appState]);
  return (
    <RootStack.Navigator
      initialRouteName={
        authState === 'unlocked' ? 'HomeTabs' : 'AuthNavigation'
      }
      screenOptions={screenOptions}
    >
      {flow}
    </RootStack.Navigator>
  );
};
