import { StackScreenProps } from '@react-navigation/stack';

import { AuthPasswordConnector } from '@pages/authorization/auth-password';

import { AuthStackParamsList } from '../types';

export type AuthPasswordScreenProps = StackScreenProps<
  AuthStackParamsList,
  'authPassword'
>;
export const AuthPasswordScreen = ({
  navigation,
  route,
}: AuthPasswordScreenProps) => {
  const { result } = route.params;
  const onPress = () => {
    navigation.navigate('authPinPreview');
  };
  return (
    <AuthPasswordConnector guestToken={result.guestToken} onPress={onPress} />
  );
};
