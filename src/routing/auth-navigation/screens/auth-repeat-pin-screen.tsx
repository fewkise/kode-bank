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
  const goBack = () => {
    navigation.navigate('authCreatePin');
  };
  const goToSuccess = (pin: string) => {
    navigation.navigate('authSuccess', { pin });
  };
  return (
    <AuthRepeatPinConnector
      goToSuccess={goToSuccess}
      goBack={goBack}
      code={code}
    />
  );
};
