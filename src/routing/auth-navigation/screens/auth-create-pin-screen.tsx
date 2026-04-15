import { StackScreenProps } from '@react-navigation/stack';

import { AuthCreatePinConnector } from '@pages/authorization/auth-create-pin';

import { AuthStackParamsList } from '../types';

export type AuthCreatePinProps = StackScreenProps<
  AuthStackParamsList,
  'authCreatePin'
>;
export const AuthCreatePinScreen = ({ navigation }: AuthCreatePinProps) => {
  const onPress = (code: string) => {
    navigation.navigate('authRepeatPin', { code });
  };
  return <AuthCreatePinConnector onPress={onPress} />;
};
