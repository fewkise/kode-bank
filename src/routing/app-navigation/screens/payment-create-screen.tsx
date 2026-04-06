import { StackScreenProps } from '@react-navigation/stack';

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
  const { serviceIcon } = route.params;
  const goToConfirm = () => {
    navigation.navigate('paymentConfirm');
  };
  return (
    <PaymentCreateConnector serviceIcon={serviceIcon} onSuccess={goToConfirm} />
  );
};
