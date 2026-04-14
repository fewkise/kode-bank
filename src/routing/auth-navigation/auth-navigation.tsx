import { createStackNavigator } from '@react-navigation/stack';

import { useDefaultStackScreenOptions } from '@routing/lib/hooks/use-default-stack-screen-options';

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
  return (
    <AuthStack.Navigator
      initialRouteName="authPhoneNumber"
      screenOptions={screenOptions}
    >
      <AuthStack.Screen
        name="authPhoneNumber"
        component={AuthPhoneNumberScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen name="authRepeatPin" component={AuthRepeatPinScreen} />
      <AuthStack.Screen name="authPinEnter" component={AuthPinEnterScreen} />
      <AuthStack.Screen name="authCreatePin" component={AuthCreatePinScreen} />
      <AuthStack.Screen
        name="authPinPreview"
        component={AuthPinPreviewScreen}
      />
      <AuthStack.Screen name="authPassword" component={AuthPasswordScreen} />
      <AuthStack.Screen name="authSuccess" component={AuthSuccessScreen} />
      <AuthStack.Screen name="authOtp" component={AuthOtpScreen} />
    </AuthStack.Navigator>
  );
};
