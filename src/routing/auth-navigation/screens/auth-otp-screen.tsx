import { StackScreenProps } from '@react-navigation/stack';

import { AuthOtpConnector } from '@pages/authorization/auth-otp';

import { AuthStackParamsList } from '../types';

export type AuthOtpScreenProps = StackScreenProps<
  AuthStackParamsList,
  'authOtp'
>;
export const AuthOtpScreen = ({ navigation }: AuthOtpScreenProps) => {
  const onPress = () => {
    navigation.navigate('authPassword');
  };
  const goBack = () => {
    navigation.navigate('authPhoneNumber');
  };
  return <AuthOtpConnector goBack={goBack} onPress={onPress} />;
};
