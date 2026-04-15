import { useEffect, useState } from 'react';

import { AuthRepeatPin } from './auth-repeat-pin';
type AuthRepeatPinConnectorProps = {
  onPress: () => void;
  code: string;
};
export const AuthRepeatPinConnector = ({
  onPress,
  code,
}: AuthRepeatPinConnectorProps) => {
  const firstPin = code;
  const [secondPin, setSecondPin] = useState('');
  const [error, setError] = useState(false);
  const pinLength = 5;
  const onKeyPress = (val: string) => {
    setError(false);
    if (val === 'back') {
      setSecondPin(prev => prev.slice(0, -1));
    } else if (secondPin.length < pinLength) {
      setSecondPin(prev => prev + val);
    }
  };
  useEffect(() => {
    if (secondPin.length === pinLength) {
      if (secondPin === firstPin) {
        onPress();
      } else {
        setError(true);
      }
    }
  }, [onPress, firstPin, secondPin]);
  const clearPinCode = () => {
    setSecondPin('');
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
