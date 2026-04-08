import { usePaymentStatus } from '@entities/payments';

import { PaymentStatus } from './payment-status';
import { TStatus } from './types';
type Props = {
  onPress: () => void;
  paymentId: string;
  amount: string | number;
};
export const PaymentStatusConnector = ({
  onPress,
  paymentId,
  amount,
}: Props) => {
  const { data, isFetching } = usePaymentStatus(paymentId);
  const currentStatus: TStatus = data?.status as TStatus;
  return (
    <PaymentStatus
      amount={amount}
      isLoading={isFetching}
      onPress={onPress}
      status={currentStatus}
    />
  );
};
