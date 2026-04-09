import { StackScreenProps } from '@react-navigation/stack';

import { PaymentConfirmConnector } from '@pages/payment/payment-confirm';
import { TStatus } from '@pages/payment/payment-status/types';

import { RootStackParamsList } from '../types';
type Props = ConfirmScreenProps;
type ConfirmScreenProps = StackScreenProps<
  RootStackParamsList,
  'paymentConfirm'
>;

export const PaymentConfirmScreen = ({ navigation, route }: Props) => {
  const { payload, cardData } = route.params;
  const goToStatus = (paymentId: string, status: TStatus) =>
    navigation.navigate('paymentStatus', {
      paymentId,
      amount: payload.amount,
      status,
    });

  return (
    <PaymentConfirmConnector
      cardData={cardData}
      payload={payload}
      goToStatus={goToStatus}
    />
  );
};
