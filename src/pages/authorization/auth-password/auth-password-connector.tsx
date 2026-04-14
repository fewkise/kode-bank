import { useState } from 'react';

import { AuthPassword } from './auth-password';
type AuthPasswordConnectorProps = {
  onPress: () => void;
};
export const AuthPasswordConnector = ({
  onPress,
}: AuthPasswordConnectorProps) => {
  const [password, setPassword] = useState('');
  const [isSubmited, setSubmited] = useState(false);
  const passwordError = password.length < 8;
  const message =
    passwordError && isSubmited ? 'Введен неверный пароль' : 'Введите пароль';
  const onConfirm = () => {
    setSubmited(true);
    if (!passwordError) {
      onPress();
    }
  };
  return (
    <AuthPassword
      message={message}
      isSubmitted={isSubmited}
      password={password}
      setPassword={setPassword}
      passwordError={passwordError}
      onPress={onConfirm}
    />
  );
};
