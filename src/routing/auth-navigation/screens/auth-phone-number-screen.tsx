import { StackScreenProps } from '@react-navigation/stack';

import { AuthPhoneNumberConnector } from '@pages/authorization/auth-phone-number';

import { AuthStackParamsList } from '../types';

export type AuthPhoneNumberScreenProps = StackScreenProps<
  AuthStackParamsList,
  'authPhoneNumber'
>;
export const AuthPhoneNumberScreen = ({
  navigation,
}: AuthPhoneNumberScreenProps) => {
  const onPress = () => {
    navigation.navigate('authOtp');
  };
  return <AuthPhoneNumberConnector onPress={onPress} />;
};
