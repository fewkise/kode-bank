import { usePaymentList } from '@entities/payments';

import { PaymentMain } from './payment-main';
type Props = {
  onPress: (serviceName: string) => void;
};
export const PaymentMainConnector = ({ onPress }: Props) => {
  const { data, refetch, isRefetching } = usePaymentList();

  const allServices = data?.category ?? [];
  return (
    <PaymentMain
      isRefreshing={isRefetching}
      refresh={refetch}
      onPress={onPress}
      data={allServices}
    />
  );
};
