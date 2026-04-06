import React from 'react';
import { Alert, Linking } from 'react-native';

import { PaymentConfirm } from '@pages/payment/payment-confirm';

import { mockdata } from '../../../../test/mock-input-full';

export type ConnectorProps = {
  goToStatus: () => void;
};

export const PaymentConfirmConnector = ({ goToStatus }: ConnectorProps) => {
  const onConfirm = () => {
    goToStatus();
  };

  const onOpenLink = () => {
    Linking.openURL('https://reactnative.dev').catch(() => {
      Alert.alert('Ошибка', 'Не удалось открыть ссылку');
    });
  };

  return (
    <PaymentConfirm
      data={mockdata}
      onConfirm={onConfirm}
      onLinkPress={onOpenLink}
    />
  );
};
