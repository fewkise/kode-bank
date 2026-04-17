import { createStackNavigator } from '@react-navigation/stack';
import { useUnit } from 'effector-react';
import { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { useAuthState } from '@features/auth/hooks/use-auth-state';
import { useHasPin } from '@features/auth/hooks/use-has-pin';
import { useLoggedIn } from '@features/auth/hooks/use-logged-in';
import { resetOtpData } from '@features/otp/model/opt';
import { useDefaultStackScreenOptions } from '@routing/lib/hooks/use-default-stack-screen-options';
import { getAuthNavigatorState } from '@routing/lib/utils/get-auth-navigator-state';
import { HeaderLeft } from '@routing/ui/header-left/header-left';
import { Icon } from '@shared/ui/atoms';

import { AuthCreatePinScreen } from './screens/auth-create-pin-screen';
import { AuthOtpScreen } from './screens/auth-otp-screen';
import { AuthPasswordScreen } from './screens/auth-password-screen';
import { AuthPhoneNumberScreen } from './screens/auth-phone-number-screen';
import { AuthPinEnterScreen } from './screens/auth-pin-enter-screen';
import { AuthPinPreviewScreen } from './screens/auth-pin-preview-screen';
import { AuthRepeatPinScreen } from './screens/auth-repeat-pin-screen';
import { AuthSuccessScreen } from './screens/auth-success-screen';
import { AuthStackParamsList } from './types';
const AuthStack = createStackNavigator<AuthStackParamsList>();
export const AuthNavigation = () => {
  const screenOptions = useDefaultStackScreenOptions();
  const { theme } = useUnistyles();
  const resetOtp = useUnit(resetOtpData);
  const authState = useAuthState();
  const { loggedIn } = useLoggedIn();
  const hasPin = useHasPin();
  const navAuthState = getAuthNavigatorState({ authState, loggedIn, hasPin });
  const flow = useMemo(() => {
    switch (navAuthState) {
      case 'auth':
        return (
          <>
            <AuthStack.Screen
              name="authPhoneNumber"
              component={AuthPhoneNumberScreen}
              options={{ headerShown: false }}
            />
            <AuthStack.Screen
              options={({ navigation }) => ({
                headerLeftContainerStyle: {
                  paddingLeft: theme.spacing(2),
                },
                headerTitle: '',
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      resetOtp();
                      navigation.navigate('authPhoneNumber');
                    }}
                  >
                    <Icon color={theme.palette.text.primary} name="IconClose" />
                  </TouchableOpacity>
                ),
              })}
              name="authPassword"
              component={AuthPasswordScreen}
            />
            <AuthStack.Screen
              options={{ headerShown: false }}
              name="authOtp"
              component={AuthOtpScreen}
            />

            <AuthStack.Screen
              options={{ headerShown: false }}
              name="authSuccess"
              component={AuthSuccessScreen}
            />
          </>
        );
      case 'pin-create':
        return (
          <>
            <AuthStack.Screen
              name="authPinPreview"
              options={({ navigation }) => ({
                headerLeftContainerStyle: {
                  paddingLeft: theme.spacing(2),
                },
                headerTitle: '',
                headerLeft: () => (
                  <HeaderLeft
                    onPress={() => navigation.navigate('authSuccess')}
                  />
                ),
              })}
              component={AuthPinPreviewScreen}
            />
            <AuthStack.Screen
              options={({ navigation }) => ({
                headerLeftContainerStyle: {
                  paddingLeft: theme.spacing(2),
                },
                headerTitle: '',
                headerLeft: () => (
                  <HeaderLeft
                    onPress={() => navigation.navigate('authSuccess')}
                  />
                ),
              })}
              name="authCreatePin"
              component={AuthCreatePinScreen}
            />
            <AuthStack.Screen
              options={({ navigation }) => ({
                headerLeftContainerStyle: {
                  paddingLeft: theme.spacing(2),
                },
                headerTitle: '',
                headerLeft: () => (
                  <HeaderLeft
                    onPress={() => navigation.navigate('authSuccess')}
                  />
                ),
              })}
              name="authRepeatPin"
              component={AuthRepeatPinScreen}
            />
            <AuthStack.Screen
              options={{ headerShown: false }}
              name="authSuccess"
              component={AuthSuccessScreen}
            />
          </>
        );
      case 'pin-auth':
        return (
          <AuthStack.Screen
            name="authPinEnter"
            options={{ headerShown: false }}
            component={AuthPinEnterScreen}
          />
        );
      case 'setup':
        return (
          <AuthStack.Screen
            options={{ headerShown: false }}
            name="authSuccess"
            component={AuthSuccessScreen}
          />
        );
    }
  }, [resetOtp, navAuthState, theme]);
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      {flow}
    </AuthStack.Navigator>
  );
};
