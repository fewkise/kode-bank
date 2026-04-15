import { StackScreenProps } from '@react-navigation/stack';

import { AuthRepeatPinConnector } from '@pages/authorization/auth-repeat-pin';

import { AuthStackParamsList } from '../types';

export type AuthRepeatPinProps = StackScreenProps<
  AuthStackParamsList,
  'authRepeatPin'
>;
export const AuthRepeatPinScreen = ({
  navigation,
  route,
}: AuthRepeatPinProps) => {
  const { code } = route.params;
  const onPress = () => {
    navigation.navigate('authSuccess');
  };
  return <AuthRepeatPinConnector code={code} onPress={onPress} />;
};
