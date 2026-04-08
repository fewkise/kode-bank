import React from 'react';
import { Alert, Linking } from 'react-native';

import { useCreatePayment } from '@entities/payments';
import { PaymentConfirm } from '@pages/payment/payment-confirm';

import { Card } from '../payment-create/types';

export type ConnectorProps = {
  goToStatus: (paymentId: string) => void;
  payload: {
    cardId: string;
    amount: number | string;
    serviceId: string;
    phoneNumber: string;
    serviceName: string;
  };
  cardData: Card[];
};
export const PaymentConfirmConnector = ({
  goToStatus,
  payload,
  cardData,
}: ConnectorProps) => {
  const { mutate } = useCreatePayment();
  const onConfirm = () => {
    mutate(payload, {
      onSuccess: data => {
        goToStatus(data.paymentId);
      },
      onError: err => {
        console.log(err);
      },
    });
  };
  const selectedCard = cardData.find(item => item.id === payload.cardId);
  const map_data = [
    { value: `${selectedCard?.name}`, id: '6', label: 'Карта для оплаты' },
    { value: `${payload.serviceName}`, id: '2', label: 'Мобильный оператор' },
    { value: `${payload.phoneNumber}`, id: '1', label: 'Телефон получателя' },
    { value: 'Виталий Викторович Г.', id: '4', label: 'Имя получателя' },
    { value: `${payload.amount}  ₽`, id: '3', label: 'Сумма платежа' },
    { value: '403  ₽', id: '5', label: 'Кешбек' },
  ];
  const onOpenLink = () => {
    Linking.openURL('https://reactnative.dev').catch(() => {
      Alert.alert('Ошибка', 'Не удалось открыть ссылку');
    });
  };

  return (
    <PaymentConfirm
      mapdata={map_data}
      payload={payload}
      onConfirm={onConfirm}
      onLinkPress={onOpenLink}
    />
  );
};
