export type TPaymentPrices = {
  serviceId: string;
  serviceCost: number;
  label: string;
};

export const paymentPrices: TPaymentPrices[] = [
  {
    serviceId: '1',
    serviceCost: 100,
    label: '100',
  },
  {
    serviceId: '2',
    serviceCost: 500,
    label: '500',
  },
  {
    serviceId: '3',
    serviceCost: 1000,
    label: '1 000',
  },
  {
    serviceId: '4',
    serviceCost: 2000,
    label: '2 000',
  },
  {
    serviceId: '5',
    serviceCost: 2500,
    label: '2 500',
  },
];
