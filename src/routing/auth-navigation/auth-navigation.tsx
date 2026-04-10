import { createStackNavigator } from '@react-navigation/stack';

import { rootStackOptions } from '@routing/app-navigation/config';

import { AuthInstallationPinScreen } from './screens/auth-installation-pin';
import { AuthOtpScreen } from './screens/auth-otp-screen';
import { AuthPasswordScreen } from './screens/auth-password-screen';
import { AuthPhoneNumberScreen } from './screens/auth-phone-number-screen';
import { AuthSuccessScreen } from './screens/auth-success-screen';
import { AuthStackParamsList } from './types';
const AuthStack = createStackNavigator<AuthStackParamsList>();
export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="authPhoneNumber"
      screenOptions={rootStackOptions}
    >
      <AuthStack.Screen
        name="authPhoneNumber"
        component={AuthPhoneNumberScreen}
      />
      <AuthStack.Screen
        name="authInstallationPin"
        component={AuthInstallationPinScreen}
      />
      <AuthStack.Screen name="authPassword" component={AuthPasswordScreen} />
      <AuthStack.Screen name="authSuccess" component={AuthSuccessScreen} />
      <AuthStack.Screen name="authOtp" component={AuthOtpScreen} />
    </AuthStack.Navigator>
  );
};
