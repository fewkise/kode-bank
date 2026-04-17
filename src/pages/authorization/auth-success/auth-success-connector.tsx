import { useUnit } from 'effector-react';

import { changeAuthState } from '@features/auth/model/auth-state';

import { AuthSuccess } from './auth-success';
export const AuthSuccessConnector = () => {
  const unlock = useUnit(changeAuthState);
  const handleConfirmAuth = () => {
    unlock('unlocked');
  };
  return <AuthSuccess onPress={handleConfirmAuth} />;
};
