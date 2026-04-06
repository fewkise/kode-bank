import { StackScreenProps } from '@react-navigation/stack';

import { PaymentServicesConnector } from '@pages/payment/payment-services';

import { RootStackParamsList } from '../types';

export type PaymentServicesProps = StackScreenProps<
  RootStackParamsList,
  'paymentServices'
>;

export const PaymentServicesScreen = ({ navigation }: PaymentServicesProps) => {
  const onPress = (serviceId: string, title: string) => {
    navigation.navigate('paymentCreate', { serviceId, title });
  };
  return <PaymentServicesConnector onPress={onPress} />;
};
