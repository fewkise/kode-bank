import { StackScreenProps } from '@react-navigation/stack';

import { useLogout } from '@entities/auth/hooks/use-logout';
import { AuthPinEnterConnector } from '@pages/authorization/auth-pin-enter';
import { RootStackParamsList } from '@routing/app-navigation/types';

export type AuthPinEnterProps = StackScreenProps<
  RootStackParamsList,
  'authPinEnter'
>;
export const AuthPinEnterScreen = () => {
  const { logout } = useLogout();
  const resetSession = () => {
    logout();
  };
  return <AuthPinEnterConnector resetSession={resetSession} />;
};
