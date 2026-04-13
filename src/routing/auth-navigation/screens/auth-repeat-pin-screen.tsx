import { StackScreenProps } from '@react-navigation/stack';

import { AuthRepeatPinConnector } from '@pages/authorization/auth-repeat-pin';

import { AuthStackParamsList } from '../types';

export type AuthRepeatPinProps = StackScreenProps<
  AuthStackParamsList,
  'authRepeatPin'
>;
export const AuthRepeatPinScreen = ({ navigation }: AuthRepeatPinProps) => {
  const onPress = () => {
    navigation.navigate('authSuccess');
  };
  return <AuthRepeatPinConnector onPress={onPress} />;
};
