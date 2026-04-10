import { StackScreenProps } from '@react-navigation/stack';

import { AuthPasswordConnector } from '@pages/authorization/auth-password';

import { AuthStackParamsList } from '../types';

export type AuthPasswordScreenProps = StackScreenProps<
  AuthStackParamsList,
  'authPassword'
>;
export const AuthPasswordScreen = ({ navigation }: AuthPasswordScreenProps) => {
  const onPress = () => {
    navigation.navigate('authInstallationPin');
  };
  return <AuthPasswordConnector onPress={onPress} />;
};
