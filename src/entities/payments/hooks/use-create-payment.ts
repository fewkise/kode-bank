import { useMutation } from '@tanstack/react-query';

type PaymentPayload = {
  amount: number | string;
  cardId: string;
  serviceId: string;
  phoneNumber: string;
  serviceName: string;
};

export const useCreatePayment = () => {
  return useMutation<{ paymentId: string }, Error, PaymentPayload>({
    mutationFn: async (_payload: PaymentPayload) => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return { paymentId: '1243' };
    },
  });
};
