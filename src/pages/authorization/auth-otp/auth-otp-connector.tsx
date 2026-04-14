import { useEffect, useState } from 'react';

import { useTimer } from '@entities/auth/utils/timer';
import { OtpResponse } from '@entities/auth/types';

import { AuthOtp } from './auth-otp';
type AuthOtpConnectorProps = {
  onPress: () => void;
  goBack: () => void;
};
export const AuthOtpConnector = ({
  onPress,
  goBack,
}: AuthOtpConnectorProps) => {
  const [code, setCode] = useState('');
  const [tries, setTries] = useState(5);
  const errorMessage = `Неверный код. Осталось ${tries} попыток`;
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const otpCode = '123456';
  const codeLength = 6;
  const { timeLeft, restart, isFinished } = useTimer(180);
  const timerText = isFinished
    ? 'Выслать код повторно'
    : `Повторить через ${timeLeft}`;
  const handleResend = () => {
    console.log('повторный запрос отп');
    setTries(5);
    setError(false);
    restart();
  };
  useEffect(() => {
    if (tries === 0) {
      goBack();
      restart();
      setTries(1);
    }
  }, [tries, goBack, restart]);
  useEffect(() => {
    const verifyCode = async (currentCode: string) => {
      setLoading(true);
      try {
        if (currentCode !== otpCode) {
          throw new Error();
        }
        onPress();
      } catch {
        setTries(prev => prev - 1);
        setError(true);
        setTimeout(() => {
          setCode('');
          setError(false);
        }, 5000);
      } finally {
        setLoading(false);
      }
    };
    if (code.length === codeLength) {
      verifyCode(code);
    }
  }, [code, onPress]);

  const onKeyPress = (val: string) => {
    if (isLoading || tries <= 0) {
      return;
    }
    if (val === 'back') {
      setCode(prev => prev.slice(0, -1));
    } else if (code.length < codeLength) {
      setCode(prev => prev + val);
    }
  };
  return (
    <AuthOtp
      canResend={isFinished}
      code={code}
      timerText={timerText}
      errorMessage={errorMessage}
      setCode={setCode}
      onPress={onPress}
      onResend={handleResend}
      onKeyPress={onKeyPress}
      isError={isError}
    />
  );
};
