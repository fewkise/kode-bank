import { StackScreenProps } from '@react-navigation/stack';

import { AuthCreatePinConnector } from '@pages/authorization/auth-create-pin';

import { AuthStackParamsList } from '../types';

export type AuthCreatePinProps = StackScreenProps<
  AuthStackParamsList,
  'authCreatePin'
>;
export const AuthCreatePinScreen = ({ navigation }: AuthCreatePinProps) => {
  const onPress = () => {
    navigation.navigate('authRepeatPin');
  };
  return <AuthCreatePinConnector onPress={onPress} />;
};
