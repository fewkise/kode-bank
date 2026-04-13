export type TStatus = 'error' | 'success';
export type PaymentPayload = {
  amount: number;
  cardId: string;
  serviceId: string;
  phoneNumber: string;
  serviceName: string;
};
