import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';

import { changeAuthState } from '@features/auth/model/auth-state';
import { savePin } from '@features/pin/model/pin';

import { AuthRepeatPin } from './auth-repeat-pin';
type AuthRepeatPinConnectorProps = {
  code: string;
  goBack: () => void;
};
export const AuthRepeatPinConnector = ({
  code,
  goBack,
}: AuthRepeatPinConnectorProps) => {
  const firstPin = code;
  const [secondPin, setSecondPin] = useState('');
  const [error, setError] = useState(false);
  const pinLength = 5;
  const unlock = useUnit(changeAuthState);
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
      unlock('setup');
    } else {
      setError(true);
    }
  }, [firstPin, secondPin, onSavePin, unlock]);
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
