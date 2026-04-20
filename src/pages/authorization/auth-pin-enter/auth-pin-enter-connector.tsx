import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';

import { changeAuthState } from '@features/auth/model/auth-state';
import { $pinStore, checkPinSuccess, logoutPin } from '@features/pin/model/pin';

import { AuthPinEnter } from './auth-pin-enter';

type AuthPinEnterConnectorProps = {
  resetSession: () => void;
};
export const AuthPinEnterConnector = ({
  resetSession,
}: AuthPinEnterConnectorProps) => {
  const [pin, setPin] = useState('');
  const [tries, setTries] = useState(5);
  const [error, setError] = useState(false);
  const unlock = useUnit(changeAuthState);
  const errorMessage = `Неверный код. Осталось ${tries} попытки`;
  const pinLength = 5;
  const { pin: realPin } = useUnit($pinStore);
  const onConfirm = useUnit(checkPinSuccess);
  const onLogout = useUnit(logoutPin);
  const onKeyPress = (val: string) => {
    if (error) {
      return;
    }
    if (val === 'back') {
      setPin(prev => prev.slice(0, -1));
      return;
    }
    if (pin.length < pinLength) {
      setPin(prev => prev + val);
    }
  };
  useEffect(() => {
    if (tries === 0) {
      resetSession();
      onLogout();
    }
  }, [tries, resetSession, onLogout]);
  useEffect(() => {
    if (pin.length === pinLength) {
      if (pin === realPin) {
        unlock('unlocked');
        onConfirm();
      } else {
        setTries(prev => prev - 1);
        setError(true);
        setTimeout(() => {
          setError(false);
          setPin('');
        }, 1000);
        setPin('');
      }
    }
  }, [pin, realPin, onConfirm, unlock]);
  const clearPinCode = () => {
    setPin('');
  };
  return (
    <AuthPinEnter
      errorMessage={errorMessage}
      isError={error}
      length={pinLength}
      pin={pin}
      onKeyPress={onKeyPress}
      onClear={clearPinCode}
    />
  );
};
