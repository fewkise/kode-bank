import { useMutation } from '@tanstack/react-query';

import { TStatus } from '@pages/payment/payment-status/types';
export type PaymentPayload = {
  amount: number | string;
  cardId: string;
  serviceId: string;
  phoneNumber: string;
  serviceName: string;
};

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
