import { useMutation } from '@tanstack/react-query';

import { authApi } from '@shared/api';
import { DefaultApiPostApiAuthRefreshRequest } from '@shared/api/auth-axios-client';

export const useAuthConfirm = () =>
  useMutation({
    mutationFn: (payload: DefaultApiPostApiAuthRefreshRequest) =>
      authApi.postApiAuthRefresh(payload),
  });
