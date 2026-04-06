import { services } from './constants';
import { PaymentMain } from './payment-main';
type Props = {
  onPress: () => void;
};
export const PaymentMainConnector = ({ onPress }: Props) => {
  return <PaymentMain onPress={onPress} data={services} />;
};
