import { useCreatePayment } from '@entities/payments';
import { TStatus } from '@entities/payments/types';

import { PaymentStatus } from './payment-status';
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
