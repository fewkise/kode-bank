import { usePaymentList } from '@entities/payments';

import { PaymentMain } from './payment-main';
type Props = {
  onPress: (serviceName: string) => void;
};
export const PaymentMainConnector = ({ onPress }: Props) => {
  const { data } = usePaymentList();

  const allServices = data?.category ?? [];
  return <PaymentMain onPress={onPress} data={allServices} />;
};
