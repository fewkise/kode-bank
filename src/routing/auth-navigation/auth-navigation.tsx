import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { useDefaultStackScreenOptions } from '@routing/lib/hooks/use-default-stack-screen-options';
import { HeaderLeft } from '@routing/ui/header-left/header-left';
import { Icon } from '@shared/ui/atoms';

import { AuthCreatePinScreen } from './screens/auth-create-pin-screen';
import { AuthOtpScreen } from './screens/auth-otp-screen';
import { AuthPasswordScreen } from './screens/auth-password-screen';
import { AuthPhoneNumberScreen } from './screens/auth-phone-number-screen';
import { AuthPinPreviewScreen } from './screens/auth-pin-preview-screen';
import { AuthRepeatPinScreen } from './screens/auth-repeat-pin-screen';
import { AuthSuccessScreen } from './screens/auth-success-screen';
import { AuthStackParamsList } from './types';
const AuthStack = createStackNavigator<AuthStackParamsList>();
export const AuthNavigation = () => {
  const screenOptions = useDefaultStackScreenOptions();
  const { theme } = useUnistyles();

  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
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
            <HeaderLeft onPress={() => navigation.navigate('authSuccess')} />
          ),
        })}
        name="authRepeatPin"
        component={AuthRepeatPinScreen}
      />

      <AuthStack.Screen
        options={({ navigation }) => ({
          headerLeftContainerStyle: {
            paddingLeft: theme.spacing(2),
          },
          headerTitle: '',
          headerLeft: () => (
            <HeaderLeft onPress={() => navigation.navigate('authSuccess')} />
          ),
        })}
        name="authCreatePin"
        component={AuthCreatePinScreen}
      />
      <AuthStack.Screen
        name="authPinPreview"
        options={({ navigation }) => ({
          headerLeftContainerStyle: {
            paddingLeft: theme.spacing(2),
          },
          headerTitle: '',
          headerLeft: () => (
            <HeaderLeft onPress={() => navigation.navigate('authSuccess')} />
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
            <TouchableOpacity
              onPress={() => navigation.navigate('authPhoneNumber')}
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
    </AuthStack.Navigator>
  );
};
