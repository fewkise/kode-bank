import { StackScreenProps } from '@react-navigation/stack';

import { useLogout } from '@entities/auth/hooks/use-logout';
import { AuthConfirmResponse } from '@entities/auth/types';
import { AuthOtpConnector } from '@pages/authorization/auth-otp';

import { AuthStackParamsList } from '../types';

export type AuthOtpScreenProps = StackScreenProps<
  AuthStackParamsList,
  'authOtp'
>;
export const AuthOtpScreen = ({ navigation, route }: AuthOtpScreenProps) => {
  const { data, phoneNumber } = route.params;
  const { logout } = useLogout();
  const onPress = (result: AuthConfirmResponse) => {
    navigation.navigate('authPassword', { result });
  };
  const goBack = () => {
    logout();
    navigation.navigate('authPhoneNumber');
  };
  return (
    <AuthOtpConnector
      data={data}
      phoneNumber={phoneNumber}
      goBack={goBack}
      onPress={onPress}
    />
  );
};
