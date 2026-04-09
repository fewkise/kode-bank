import { useQuery } from '@tanstack/react-query';

import { mock_cards } from '@entities/mocks/mock-cards';

import { PAYMENT_CARD_QUERY_KEYS } from '../payment-card-query-keys';

export const usePaymentCards = () => {
  return useQuery({
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));

      return mock_cards;
    },
    queryKey: PAYMENT_CARD_QUERY_KEYS.cardData,
  });
};
