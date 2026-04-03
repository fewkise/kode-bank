export type TPaymentPrices = {
  serviceId: string;
  serviceCost: string;
};

export const paymentPrices: TPaymentPrices[] = [
  {
    serviceId: '1',
    serviceCost: '100',
  },
  {
    serviceId: '2',
    serviceCost: '500',
  },
  {
    serviceId: '3',
    serviceCost: '1 000',
  },
  {
    serviceId: '4',
    serviceCost: '2 000',
  },
  {
    serviceId: '5',
    serviceCost: '2 500',
  },
];
