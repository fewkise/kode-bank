import { useEffect, useState } from 'react';

import { AuthRepeatPin } from './auth-repeat-pin';
type AuthRepeatPinConnectorProps = {
  code: string;
  goBack: () => void;
  goToSuccess: (pin: string) => void;
};
export const AuthRepeatPinConnector = ({
  code,
  goBack,
  goToSuccess,
}: AuthRepeatPinConnectorProps) => {
  const firstPin = code;
  const [secondPin, setSecondPin] = useState('');
  const [error, setError] = useState(false);
  const pinLength = 5;
  const onKeyPress = (val: string) => {
    setError(false);
    if (val === 'back') {
      setSecondPin(prev => prev.slice(0, -1));
      return;
    }
    if (secondPin.length < pinLength) {
      setSecondPin(prev => prev + val);
    }
  };
  useEffect(() => {
    if (secondPin.length !== pinLength) {
      return;
    }
    if (secondPin === firstPin) {
      goToSuccess(secondPin);
    } else {
      setError(true);
    }
  }, [firstPin, secondPin, goToSuccess]);
  const clearPinCode = () => {
    setSecondPin('');
    setError(false);
    goBack();
  };
  return (
    <AuthRepeatPin
      firstPin={firstPin}
      onKeyPress={onKeyPress}
      isError={error}
      pin={secondPin}
      onClear={clearPinCode}
      length={pinLength}
    />
  );
};
