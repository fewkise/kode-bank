import { PaymentStatus } from './payment-status';
type Props = {
  onPress: () => void;
};
export const PaymentStatusConnector = ({ onPress }: Props) => {
  const status = 'done';
  return <PaymentStatus onPress={onPress} status={status} />;
};
