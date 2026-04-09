import { useCreatePayment } from '@entities/payments';

import { PaymentStatus } from './payment-status';
import { TStatus } from './types';
type Props = {
  onPress: () => void;
  paymentId: string;
  amount: string | number;
  status: TStatus;
};
export const PaymentStatusConnector = ({ onPress, amount, status }: Props) => {
  const { isPending } = useCreatePayment();
  const currentStatus: TStatus = status ?? 'error';
  return (
    <PaymentStatus
      amount={amount}
      isLoading={isPending}
      onPress={onPress}
      status={currentStatus}
    />
  );
};
