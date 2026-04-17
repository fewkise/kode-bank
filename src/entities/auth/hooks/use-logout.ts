import { useQueryClient } from '@tanstack/react-query';
import { useUnit } from 'effector-react';
import { useCallback } from 'react';

import { $authStore, logout } from '@features/auth/model/auth';
import { resetAuthState } from '@features/auth/model/auth-state';
import { resetOtpData } from '@features/otp/model/opt';
import { logoutPin } from '@features/pin/model/pin';
import { DefaultApiPostApiAuthLogoutRequest } from '@shared/api/auth-axios-client';

import { useAuthLogout } from './use-auth-logout';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const onLogout = useUnit(logout);
  const pinLogout = useUnit(logoutPin);
  const resetAuth = useUnit(resetAuthState);
  const resetOtp = useUnit(resetOtpData);
  const { refreshToken } = useUnit($authStore);
  const { mutate, isPending } = useAuthLogout();
  const handleLogout = useCallback(() => {
    resetOtp();

    const payload: DefaultApiPostApiAuthLogoutRequest = {
      postApiAuthRefreshRequest: {
        refreshToken: refreshToken || '',
      },
    };
    mutate(payload, {
      onSuccess: () => {
        onLogout();
        resetAuth();
        pinLogout();
        queryClient.clear();
      },
    });
  }, [
    mutate,
    onLogout,
    queryClient,
    refreshToken,
    resetOtp,
    pinLogout,
    resetAuth,
  ]);
  return { logout: handleLogout, isPending };
};
