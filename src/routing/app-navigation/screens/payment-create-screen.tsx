import { StackScreenProps } from '@react-navigation/stack';

import { Card } from '@entities/payment-card/types';
import { PaymentPayload } from '@entities/payments/types';
import { PaymentCreateConnector } from '@pages/payment';

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
