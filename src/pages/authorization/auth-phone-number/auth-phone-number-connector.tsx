import { useState } from 'react';

import { useAuthOtp } from '@entities/auth';
import { OtpResponse } from '@entities/auth/types';
import { DefaultApiPostApiAuthOtpCodeRequest } from '@shared/api/auth-axios-client';

import { AuthPhoneNumber } from './auth-phone-number';
type AuthPhoneNumberConnectorProps = {
  goToOtp: (data: OtpResponse) => void;
};
export const AuthPhoneNumberConnector = ({
  goToOtp,
}: AuthPhoneNumberConnectorProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmited, setSubmited] = useState(false);
  const phoneNumberError = phoneNumber.length < 11;
  const { mutate } = useAuthOtp();

  const handleContinue = () => {
    setSubmited(true);
    if (!phoneNumberError) {
      const payload: DefaultApiPostApiAuthOtpCodeRequest = {
        postApiAuthOtpCodeRequest: {
          phone: phoneNumber,
        },
      };
      mutate(payload, {
        onSuccess: response => {
          const result = response.data;
          goToOtp(result);
        },
        onError: err => {
          console.log(err);
        },
      });
    }
  };
  return (
    <AuthPhoneNumber
      isSubmitted={isSubmited}
      phoneNumberError={phoneNumberError}
      setPhoneNumber={setPhoneNumber}
      phoneNumber={phoneNumber}
      onPress={handleContinue}
    />
  );
};
