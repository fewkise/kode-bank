import { StackScreenProps } from '@react-navigation/stack';

import { OtpResponse } from '@entities/auth/types';
import { AuthPhoneNumberConnector } from '@pages/authorization/auth-phone-number';

import { AuthStackParamsList } from '../types';

export type AuthPhoneNumberScreenProps = StackScreenProps<
  AuthStackParamsList,
  'authPhoneNumber'
>;
export const AuthPhoneNumberScreen = ({
  navigation,
}: AuthPhoneNumberScreenProps) => {
  const goToOtp = (data: OtpResponse, phoneNumber: string) => {
    navigation.navigate('authOtp', { data, phoneNumber });
  };
  return <AuthPhoneNumberConnector goToOtp={goToOtp} />;
};
