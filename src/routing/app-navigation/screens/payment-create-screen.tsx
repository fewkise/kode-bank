import { StackScreenProps } from '@react-navigation/stack';

import { PaymentCreateConnector } from '@pages/payment';
import { Card, PaymentPayload } from '@pages/payment/payment-create/types';

import { RootStackParamsList } from '../types';
export type PaymentCreateProps = StackScreenProps<
  RootStackParamsList,
  'paymentCreate'
>;
export const PaymentCreateScreen = ({
  navigation,
  route,
}: PaymentCreateProps) => {
  const { serviceIcon, serviceId, title } = route.params;
  const goToConfirm = (payload: PaymentPayload, cardData: Card[]) => {
    navigation.navigate('paymentConfirm', { payload, cardData });
  };
  return (
    <PaymentCreateConnector
      serviceName={title}
      serviceId={serviceId}
      serviceIcon={serviceIcon}
      onSuccess={goToConfirm}
    />
  );
};
