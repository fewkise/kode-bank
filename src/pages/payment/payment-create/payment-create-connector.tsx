import { useState } from 'react';
import { ImageSourcePropType } from 'react-native';

import { paymentPrices } from './constants';
import { PaymentCreate } from './payment-create';
type Props = {
  onSuccess: () => void;
  serviceIcon: ImageSourcePropType;
};
export const PaymentCreateConnector = ({ onSuccess, serviceIcon }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sum, setSum] = useState('0');
  const [isSubmited, setSubmited] = useState(false);
  const sumError = sum === '' || sum === '0';
  const cardNumber = '1211';
  const phoneNumberError = phoneNumber.length < 10;
  const handleClear = () => {
    setPhoneNumber('');
  };
  const handleContinue = () => {
    setSubmited(true);
    if (!sumError && !phoneNumberError) {
      onSuccess();
    }
  };
  return (
    <PaymentCreate
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      sumError={sumError}
      phoneNumberError={phoneNumberError}
      sum={sum}
      serviceIcon={serviceIcon}
      handleClear={handleClear}
      onContinue={handleContinue}
      setSum={setSum}
      paymentPrices={paymentPrices}
      isSubmited={isSubmited}
      cardNumber={cardNumber}
    />
  );
};
