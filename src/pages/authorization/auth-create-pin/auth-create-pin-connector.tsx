import { useEffect, useState } from 'react';

import { AuthCreatePin } from './auth-create-pin';

type AuthCreatePinConnectorProps = {
  onPress: (code: string) => void;
};
export const AuthCreatePinConnector = ({
  onPress,
}: AuthCreatePinConnectorProps) => {
  const [pin, setPin] = useState('');
  const pinLength = 5;
  const onKeyPress = (val: string) => {
    if (val === 'back') {
      setPin(prev => prev.slice(0, -1));
    }
    if (pin.length < pinLength) {
      setPin(prev => prev + val);
    }
  };
  useEffect(() => {
    if (pin.length === pinLength) {
      onPress(pin);
    }
  }, [onPress, pin.length, pin]);
  const clearPinCode = () => {
    setPin('');
  };
  return (
    <AuthCreatePin
      onKeyPress={onKeyPress}
      pin={pin}
      setPin={setPin}
      length={pinLength}
      onClear={clearPinCode}
    />
  );
};
