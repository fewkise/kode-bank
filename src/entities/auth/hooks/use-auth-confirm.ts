import { useMutation } from '@tanstack/react-query';

import { authApi } from '@shared/api';
import { DefaultApiPostApiAuthConfirmRequest } from '@shared/api/auth-axios-client';

export const useAuthConfirm = () =>
  useMutation({
    mutationFn: (payload: DefaultApiPostApiAuthConfirmRequest) =>
      authApi.postApiAuthConfirm(payload),
  });
