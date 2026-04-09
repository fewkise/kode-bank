export type TStatus = 'error' | 'success';
export type PaymentPayload = {
  amount: number | string;
  cardId: string;
  serviceId: string;
  phoneNumber: string;
  serviceName: string;
};
