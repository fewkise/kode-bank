import { StackScreenProps } from '@react-navigation/stack';

import { AuthPinEnterConnector } from '@pages/authorization/auth-pin-enter';
import { RootStackParamsList } from '@routing/app-navigation/types';

export type AuthPinEnterProps = StackScreenProps<
  RootStackParamsList,
  'authPinEnter'
>;
export const AuthPinEnterScreen = () => {
  const resetSession = () => {
    console.log('Сброс сессии');
  };
  const onPress = () => {
    console.log('переход на главную страницу');
  };
  return (
    <AuthPinEnterConnector resetSession={resetSession} onPress={onPress} />
  );
};
