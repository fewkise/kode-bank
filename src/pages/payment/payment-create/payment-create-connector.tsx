import { useState } from 'react';

import { usePaymentCards } from '@entities/payment-card';
import { PaymentPayload } from '@entities/payments/hooks/use-create-payment';
import { Card } from '@routing/app-navigation/entities/card/types';

import { paymentPrices } from './constants';
import { PaymentCreate } from './payment-create';
type Props = {
  onSuccess: (payload: PaymentPayload, cardData: Card[]) => void;
  serviceIcon: string;
  serviceName: string;
  serviceId: string;
};
export const PaymentCreateConnector = ({
  onSuccess,
  serviceIcon,
  serviceName,
  serviceId,
}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sum, setSum] = useState('0');
  const selectedCardId = '1';
  const [isSubmited, setSubmited] = useState(false);
  const sumError = sum === '' || sum === '0';
  const { data: cardData = [] } = usePaymentCards();
  const phoneNumberError = phoneNumber.length < 10;
  const handleClear = () => {
    setPhoneNumber('');
  };
  const selectedCard = cardData.filter(item => item.id === selectedCardId);
  const handleContinue = () => {
    const payload: PaymentPayload = {
      phoneNumber,
      amount: sum,
      serviceName,
      serviceId,
      cardId: selectedCardId,
    };
    setSubmited(true);
    if (!sumError && !phoneNumberError) {
      onSuccess(payload, cardData);
    }
  };

  return (
    <PaymentCreate
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      sumError={sumError}
      phoneNumberError={phoneNumberError}
      sum={sum}
      cardData={selectedCard}
      serviceIcon={serviceIcon}
      handleClear={handleClear}
      onContinue={handleContinue}
      setSum={setSum}
      paymentPrices={paymentPrices}
      isSubmited={isSubmited}
    />
  );
};
