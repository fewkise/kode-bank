import { Card } from '../types';

export const makeCashback = (
  selectedCard: Card[],
  sum: number,
  selectedCardId: string,
) => {
  const selectedCardOne = selectedCard.find(item => item.id === selectedCardId);
  const cashback = selectedCardOne?.cashback || 0;
  const finalCashback = cashback * sum;
  return finalCashback;
};
