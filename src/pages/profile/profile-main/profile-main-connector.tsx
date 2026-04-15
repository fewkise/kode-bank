import { useUnit } from 'effector-react';

import { useAuthLogout } from '@entities/auth';
import { $authStore, logout } from '@features/auth/model/auth';
import { resetOtpData } from '@features/otp/model/opt';
import { DefaultApiPostApiAuthLogoutRequest } from '@shared/api/auth-axios-client';

import { ProfileMain } from './profile-main';

export const ProfileMainConnector = () => {
  const onLogout = useUnit(logout);
  const { mutate } = useAuthLogout();
  const resetOtp = useUnit(resetOtpData);
  const { refreshToken } = useUnit($authStore);
  const handleLogout = () => {
    onLogout();
    resetOtp();

    const payload: DefaultApiPostApiAuthLogoutRequest = {
      postApiAuthRefreshRequest: {
        refreshToken: refreshToken || '',
      },
    };
    mutate(payload, {
      onSuccess: () => {},
    });
  };
  return <ProfileMain onPress={handleLogout} />;
};
