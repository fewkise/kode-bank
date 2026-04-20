import React from 'react';
import { Alert, Linking } from 'react-native';
import { formatValue } from 'utils/formatter';
import { formatPhone } from 'utils/formatter';

import { Card } from '@entities/payment-card/types';
import { useCreatePayment } from '@entities/payments';
import { TStatus } from '@entities/payments/types';
import { PaymentConfirm } from '@pages/payment/payment-confirm';
export type ConnectorProps = {
  goToStatus: (paymentId: string, status: TStatus) => void;
  payload: {
    cardId: string;
    amount: number;
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
        goToStatus(data.paymentId, data.status);
      },
      onError: err => {
        console.log(err);
      },
    });
  };
  const selectedCard = cardData.find(item => item.id === payload.cardId);
  const cashback = selectedCard?.cashback || 0;
  const cashRaw = Number(cashback * payload.amount);
  const cashResult = Math.round(cashRaw * 100) / 100;
  const formattedCash = formatValue(cashResult);
  const formattedPhone = formatPhone(payload.phoneNumber);
  const mapData = [
    { value: `${selectedCard?.name}`, id: '6', label: 'Карта для оплаты' },
    { value: `${payload.serviceName}`, id: '2', label: 'Мобильный оператор' },
    { value: `${formattedPhone}`, id: '1', label: 'Телефон получателя' },
    { value: 'Виталий Викторович Г.', id: '4', label: 'Имя получателя' },
    {
      value: `${formatValue(payload.amount)}  ₽`,
      id: '3',
      label: 'Сумма платежа',
    },
    {
      value: `${formattedCash}  ₽`,
      id: '5',
      label: 'Кешбек',
    },
  ];
  const onOpenLink = () => {
    Linking.openURL('https://reactnative.dev').catch(() => {
      Alert.alert('Ошибка', 'Не удалось открыть ссылку');
    });
  };

  return (
    <PaymentConfirm
      data={mapData}
      payload={payload}
      onConfirm={onConfirm}
      onLinkPress={onOpenLink}
    />
  );
};
