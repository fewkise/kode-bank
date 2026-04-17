import { useUnit } from 'effector-react';

import { $authStore } from '../model/auth';

export const useLoggedIn = () => {
  const { accessToken } = useUnit($authStore);

  return {
    loggedIn: Boolean(accessToken),
  };
};
