import { useState } from 'react';

import { usePaymentCards } from '@entities/payment-card';

import { paymentPrices } from './constants';
import { PaymentCreate } from './payment-create';
import { Card, PaymentPayload } from './types';
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

  const [isSubmited, setSubmited] = useState(false);
  const sumError = sum === '' || sum === '0';
  const { data: cardData = [] } = usePaymentCards();
  const phoneNumberError = phoneNumber.length < 10;
  const handleClear = () => {
    setPhoneNumber('');
  };
  const payload: PaymentPayload = {
    phoneNumber: phoneNumber,
    amount: sum,
    serviceName: serviceName,
    serviceId: serviceId,
    cardId: '1',
  };
  const handleContinue = () => {
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
      cardData={cardData}
      serviceIcon={serviceIcon}
      handleClear={handleClear}
      onContinue={handleContinue}
      setSum={setSum}
      paymentPrices={paymentPrices}
      isSubmited={isSubmited}
    />
  );
};
