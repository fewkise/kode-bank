import { StackScreenProps } from '@react-navigation/stack';

import { AuthInstallationPinConnector } from '@pages/authorization/auth-installation-pin';

import { AuthStackParamsList } from '../types';

export type AuthInstallationPinProps = StackScreenProps<
  AuthStackParamsList,
  'authInstallationPin'
>;
export const AuthInstallationPinScreen = ({
  navigation,
}: AuthInstallationPinProps) => {
  const onPress = () => {
    navigation.navigate('authSuccess');
  };
  return <AuthInstallationPinConnector onPress={onPress} />;
};
