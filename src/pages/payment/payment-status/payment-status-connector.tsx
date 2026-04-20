import { formatValue } from 'utils/formatter';

import { useCreatePayment } from '@entities/payments';
import { TStatus } from '@entities/payments/types';

import { PaymentStatus } from './payment-status';
type Props = {
  onPress: () => void;
  paymentId: string;
  amount: number;
  status: TStatus;
};
export const PaymentStatusConnector = ({ onPress, amount, status }: Props) => {
  const { isPending } = useCreatePayment();
  const currentStatus: TStatus = status ?? 'error';
  const formattedAmount = formatValue(amount);
  return (
    <PaymentStatus
      amount={formattedAmount}
      isLoading={isPending}
      onPress={onPress}
      status={currentStatus}
    />
  );
};
