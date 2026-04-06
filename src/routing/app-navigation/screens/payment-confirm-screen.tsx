import { StackScreenProps } from '@react-navigation/stack';

import { PaymentConfirmConnector } from '@pages/payment/payment-confirm';

import { RootStackParamsList } from '../types';

type Props = StackScreenProps<RootStackParamsList, 'paymentConfirm'>;

export const PaymentConfirmScreen = ({ navigation }: Props) => {
  const goToStatus = () => navigation.navigate('paymentStatus');

  return <PaymentConfirmConnector goToStatus={goToStatus} />;
};
