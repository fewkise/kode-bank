import { useUnit } from 'effector-react';

import { $authState } from '../model/auth-state';

export const useAuthState = () => {
  return useUnit($authState);
};
