import { StackScreenProps } from '@react-navigation/stack';

import { AuthSuccessConnector } from '@pages/authorization/auth-success';

import { AuthStackParamsList } from '../types';

export type AuthSuccessScreenProps = StackScreenProps<
  AuthStackParamsList,
  'authSuccess'
>;
export const AuthSuccessScreen = ({ route }: AuthSuccessScreenProps) => {
  const { pin } = route.params;
  return <AuthSuccessConnector pin={pin} />;
};
