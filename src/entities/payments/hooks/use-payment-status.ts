import { useQuery } from '@tanstack/react-query';

import { TStatus } from '@pages/payment/payment-status/types';

import { PAYMENTS_QUERY_KEYS } from '../payments-query-keys';
type PaymentResponse = {
  status: TStatus;
  id: string;
};
export const usePaymentStatus = (id: string) => {
  return useQuery<PaymentResponse, Error>({
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      const random = Math.random();
      let status: TStatus = 'error';
      if (random > 0.5) {
        status = 'success';
      } else {
        status = 'error';
      }
      return { status: status as TStatus, id: id };
    },
    retry: false,
    queryKey: PAYMENTS_QUERY_KEYS.paymentStatus,
    staleTime: 0,
    gcTime: 0,
  });
};
