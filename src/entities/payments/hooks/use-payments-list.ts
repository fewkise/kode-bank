import { useQuery } from '@tanstack/react-query';
import { paymentApi } from 'shared/api';

import { PAYMENTS_QUERY_KEYS } from '../payments-query-keys';

export const usePaymentList = () => {
  return useQuery({
    queryFn: async () => {
      const response = await paymentApi.getPaymentList();

      return response.data;
    },
    queryKey: PAYMENTS_QUERY_KEYS.paymentList,
  });
};
