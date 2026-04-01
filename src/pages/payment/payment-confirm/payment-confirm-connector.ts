import { StackScreenProps } from '@react-navigation/stack';
import { Alert, Linking } from 'react-native';

import { RootStackParamsList } from '@routing/app-navigation/types';

import { mockdata } from '../../../../test/mock-input-full';
export type PaymentConfirmProps = StackScreenProps<
  RootStackParamsList,
  'paymentConfirm'
>;
export const PaymentConfirmConnector = ({
  navigation,
}: PaymentConfirmProps) => {
  const goToStatus = () => {
    navigation.navigate('paymentStatus');
  };
  const openLink = () => {
    const link = 'https://reactnative.dev/';

    const handleFallback = () => {
      Alert.alert('Не удалось перейти по ссылке');
    };

    Linking.openURL(link).catch(handleFallback);
  };
  return {
    goToStatus,
    openLink,
    mockdata,
  };
};
