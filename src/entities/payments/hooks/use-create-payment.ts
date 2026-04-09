import { useMutation } from '@tanstack/react-query';

import { TStatus, PaymentPayload } from '../types';

export const useCreatePayment = () => {
  return useMutation<
    { paymentId: string; status: TStatus },
    Error,
    PaymentPayload
  >({
    mutationFn: async (_payload: PaymentPayload) => {
      await new Promise(resolve => setTimeout(resolve, 500));
      const random = Math.random();
      const status: TStatus = random > 0.5 ? 'success' : 'error';
      return { paymentId: '1243', status: status as TStatus };
    },
    gcTime: 0,
    retry: false,
  });
};
