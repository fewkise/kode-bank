import { useUnit } from 'effector-react';
import { useState } from 'react';

import { useAuthEnter } from '@entities/auth';
import { updateAuthData } from '@features/auth/model/auth';
import { DefaultApiPostApiAuthEnterRequest } from '@shared/api/auth-axios-client';

import { AuthPassword } from './auth-password';
type AuthPasswordConnectorProps = {
  onPress: () => void;
  guestToken: string;
};
export const AuthPasswordConnector = ({
  onPress,
  guestToken,
}: AuthPasswordConnectorProps) => {
  const [password, setPassword] = useState('');
  const [isSubmited, setSubmited] = useState(false);
  const { mutate, isPending } = useAuthEnter();
  const saveToken = useUnit(updateAuthData);
  const passwordError = password.length < 8;
  const message =
    passwordError && isSubmited ? 'Введен неверный пароль' : 'Введите пароль';
  const onConfirm = () => {
    setSubmited(true);
    if (!passwordError) {
      const payload: DefaultApiPostApiAuthEnterRequest = {
        postApiAuthEnterRequest: {
          password,
          guestToken,
        },
      };
      mutate(payload, {
        onSuccess: response => {
          const result = response.data;
          saveToken({
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
          });
          onPress();
        },
        onError: err => {
          console.log(err);
        },
      });
    }
  };
  return (
    <AuthPassword
      message={message}
      isSubmitted={isSubmited}
      password={password}
      setPassword={value => {
        setPassword(value);
        if (isSubmited) {
          setSubmited(false);
        }
      }}
      isLoading={isPending}
      passwordError={passwordError}
      onPress={onConfirm}
    />
  );
};
