import { StackScreenProps } from '@react-navigation/stack';

import { AuthSuccessConnector } from '@pages/authorization/auth-success/auth-success-connector';

import { AuthStackParamsList } from '../types';

export type AuthSuccessScreenProps = StackScreenProps<
  AuthStackParamsList,
  'authSuccess'
>;
export const AuthSuccessScreen = ({ navigation }: AuthSuccessScreenProps) => {
  const onPress = () => {
    navigation.navigate('HomeTabs', { screen: 'PaymentMain' });
  };
  return <AuthSuccessConnector onPress={onPress} />;
};
