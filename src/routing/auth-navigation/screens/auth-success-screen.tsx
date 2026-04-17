import { StackScreenProps } from '@react-navigation/stack';

import { AuthSuccessConnector } from '@pages/authorization/auth-success';

import { AuthStackParamsList } from '../types';

export type AuthSuccessScreenProps = StackScreenProps<
  AuthStackParamsList,
  'authSuccess'
>;
export const AuthSuccessScreen = () => {
  return <AuthSuccessConnector />;
};
