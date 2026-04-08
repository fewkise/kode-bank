import { useMutation } from '@tanstack/react-query';

import { authApi } from '@shared/api';
import { DefaultApiPostApiAuthEnterRequest } from '@shared/api/auth-axios-client';

export const useAuthEnter = () =>
  useMutation({
    mutationFn: (payload: DefaultApiPostApiAuthEnterRequest) =>
      authApi.postApiAuthEnter(payload),
  });
