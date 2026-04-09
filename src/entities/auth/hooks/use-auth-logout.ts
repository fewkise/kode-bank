import { useMutation } from '@tanstack/react-query';

import { authApi } from '@shared/api';
import { DefaultApiPostApiAuthLogoutRequest } from '@shared/api/auth-axios-client';

export const useAuthLogout = () =>
  useMutation({
    mutationFn: (payload: DefaultApiPostApiAuthLogoutRequest) =>
      authApi.postApiAuthLogout(payload),
  });
