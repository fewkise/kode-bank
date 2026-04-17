import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';

import { useAuthConfirm, useAuthOtp } from '@entities/auth';
import { AuthConfirmResponse, OtpResponse } from '@entities/auth/types';
import { useTimer } from '@entities/auth/utils/timer';
import {
  $otpStore,
  resetOtpData,
  updateOtpData,
} from '@features/otp/model/opt';
import {
  DefaultApiPostApiAuthConfirmRequest,
  DefaultApiPostApiAuthOtpCodeRequest,
} from '@shared/api/auth-axios-client';

import { AuthOtp } from './auth-otp';
type AuthOtpConnectorProps = {
  onPress: (result: AuthConfirmResponse) => void;
  goBack: () => void;
  data: OtpResponse;
  phoneNumber: string;
};
export const AuthOtpConnector = ({
  onPress,
  goBack,
  data,
  phoneNumber,
}: AuthOtpConnectorProps) => {
  const resetOtp = useUnit(resetOtpData);
  const { mutate, isPending } = useAuthConfirm();
  const updateOtp = useUnit(updateOtpData);
  const { sessionId } = useUnit($otpStore);
  const { resendTimeout } = useUnit($otpStore);
  const { mutate: resendMutate, isPending: pendingResend } = useAuthOtp();
  const [code, setCode] = useState('');
  const [tries, setTries] = useState(5);
  const errorMessage = `Неверный код. Осталось ${tries} попыток`;
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const otpCode = '123456';
  const codeLength = 6;
  const { timeLeft, restart, isFinished } = useTimer(resendTimeout || 180);
  const timerText = isFinished
    ? 'Выслать код повторно'
    : `Повторить через ${timeLeft}`;
  const handleResend = () => {
    const payloadResend: DefaultApiPostApiAuthOtpCodeRequest = {
      postApiAuthOtpCodeRequest: {
        phone: phoneNumber,
      },
    };
    resendMutate(payloadResend, {
      onSuccess: result => {
        const newOtp = result.data;
        updateOtp({
          sessionId: newOtp.otpId,
          phoneNumber,
          resendTimeout: 180,
        });
      },
    });
    setTries(5);
    setError(false);
    restart();
    resetOtp();
  };
  useEffect(() => {
    if (tries === 0) {
      goBack();
      setTries(5);
    }
  }, [tries, goBack]);
  const onKeyPress = (val: string) => {
    if (isLoading || isPending || tries <= 0) {
      return;
    }

    if (val === 'back') {
      setCode(prev => prev.slice(0, -1));
      return;
    }

    if (code.length < codeLength) {
      const nextCode = code + val;
      setCode(nextCode);

      if (nextCode.length === codeLength) {
        setLoading(true);

        if (nextCode !== otpCode) {
          setTries(prev => prev - 1);
          setError(true);
          setTimeout(() => {
            setCode('');
            setLoading(false);
            setError(false);
          }, 1000);
          return;
        }

        const payload: DefaultApiPostApiAuthConfirmRequest = {
          postApiAuthConfirmRequest: {
            phone: phoneNumber,
            otpId: sessionId || data.otpId,
            otpCode: nextCode,
          },
        };

        mutate(payload, {
          onSuccess: response => {
            onPress(response.data);
          },
          onError: () => {
            setTries(prev => prev - 1);
            setError(true);
            setCode('');
            setLoading(false);
          },
        });
      }
    }
  };
  return (
    <AuthOtp
      canResend={isFinished}
      code={code}
      timerText={timerText}
      errorMessage={errorMessage}
      onPress={onPress}
      isLoading={isLoading || isPending || pendingResend}
      onResend={handleResend}
      onKeyPress={onKeyPress}
      isError={isError}
    />
  );
};
