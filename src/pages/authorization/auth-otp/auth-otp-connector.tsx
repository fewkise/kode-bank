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
import { DefaultApiPostApiAuthConfirmRequest } from '@shared/api/auth-axios-client';
import { DefaultApiPostApiAuthOtpCodeRequest } from '@shared/api/auth-axios-client';

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
    console.log('повторный запрос отп');
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

  useEffect(() => {
    const verifyCode = async (currentCode: string) => {
      setLoading(true);
      try {
        if (currentCode !== otpCode) {
          throw new Error();
        }

        const payload: DefaultApiPostApiAuthConfirmRequest = {
          postApiAuthConfirmRequest: {
            phone: phoneNumber,
            otpId: sessionId || data.otpId,
            otpCode: currentCode,
          },
        };
        mutate(payload, {
          onSuccess: response => {
            const result = response.data;
            onPress(result);
          },
          onError: err => {
            console.log(err);
          },
        });
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
  }, [code, onPress, mutate, data.otpCode, data.otpId, phoneNumber, sessionId]);

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
      isLoading={isLoading || isPending || pendingResend}
      onResend={handleResend}
      onKeyPress={onKeyPress}
      isError={isError}
    />
  );
};
