import { StackScreenProps } from '@react-navigation/stack';

import { PaymentStatusConnector } from '@pages/payment';
import { RootStackParamsList } from '@routing/app-navigation/types';

export type PaymentStatusProps = StackScreenProps<
  RootStackParamsList,
  'paymentStatus'
>;

export const PaymentStatusScreen = ({
  route,
  navigation,
}: PaymentStatusProps) => {
  const { paymentId, amount, status } = route.params;
  const onPress = () => {
    navigation.navigate('HomeTabs', { screen: 'PaymentMain' });
  };
  return (
    <PaymentStatusConnector
      amount={amount}
      paymentId={paymentId}
      onPress={onPress}
      status={status}
    />
  );
};
