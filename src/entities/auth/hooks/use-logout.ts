import { useQueryClient } from '@tanstack/react-query';
import { useUnit } from 'effector-react';
import { useCallback } from 'react';

import { $authStore, logout } from '@features/auth/model/auth';
import { resetOtpData } from '@features/otp/model/opt';
import { DefaultApiPostApiAuthLogoutRequest } from '@shared/api/auth-axios-client';

import { useAuthLogout } from './use-auth-logout';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const onLogout = useUnit(logout);
  const resetOtp = useUnit(resetOtpData);
  const { refreshToken } = useUnit($authStore);
  const { mutate } = useAuthLogout();
  const handleLogout = useCallback(() => {
    onLogout();
    resetOtp();
    queryClient.clear();
    const payload: DefaultApiPostApiAuthLogoutRequest = {
      postApiAuthRefreshRequest: {
        refreshToken: refreshToken || '',
      },
    };
    mutate(payload);
  }, [mutate, onLogout, queryClient, refreshToken, resetOtp]);
  return { logout: handleLogout };
};
