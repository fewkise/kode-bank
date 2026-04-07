import { useMutation } from '@tanstack/react-query';

import { authApi } from '@shared/api';
import { DefaultApiPostApiAuthOtpCodeRequest } from '@shared/api/auth-axios-client';

export const useAuthOtp = () =>
  useMutation({
    mutationFn: (payload: DefaultApiPostApiAuthOtpCodeRequest) =>
      authApi.postApiAuthOtpCode(payload),
  });
