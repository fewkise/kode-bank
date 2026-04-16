import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';

import { savePin } from '@features/pin/model/pin';

import { AuthRepeatPin } from './auth-repeat-pin';
type AuthRepeatPinConnectorProps = {
  onPress: () => void;
  code: string;
  goBack: () => void;
};
export const AuthRepeatPinConnector = ({
  onPress,
  code,
  goBack,
}: AuthRepeatPinConnectorProps) => {
  const firstPin = code;
  const [secondPin, setSecondPin] = useState('');
  const [error, setError] = useState(false);
  const pinLength = 5;
  const onSavePin = useUnit(savePin);
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
      onSavePin(secondPin);
      onPress();
    } else {
      setError(true);
    }
  }, [onPress, firstPin, secondPin, onSavePin]);
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
