import { StackScreenProps } from '@react-navigation/stack';

import { AuthPinEnterConnector } from '@pages/authorization/auth-pin-enter';

import { AuthStackParamsList } from '../types';

export type AuthPinEnterProps = StackScreenProps<
  AuthStackParamsList,
  'authPinEnter'
>;
export const AuthPinEnterScreen = ({ navigation }: AuthPinEnterProps) => {
  const onPress = () => {
    navigation.navigate('HomeTabs', { screen: 'PaymentMain' });
  };
  return <AuthPinEnterConnector onPress={onPress} />;
};
