import { StackScreenProps } from '@react-navigation/stack';

import { AuthOtpConnector } from '@pages/authorization/auth-otp';

import { AuthStackParamsList } from '../types';

export type AuthOtpScreenProps = StackScreenProps<
  AuthStackParamsList,
  'authOtp'
>;
export const AuthOtpScreen = ({ navigation, route }: AuthOtpScreenProps) => {
  const { data } = route.params;
  const onPress = () => {
    navigation.navigate('authPassword');
  };
  return <AuthOtpConnector data={data} onPress={onPress} />;
};
