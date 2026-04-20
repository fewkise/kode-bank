import { useUnit } from 'effector-react';

import { changeAuthState } from '@features/auth/model/auth-state';
import { savePin } from '@features/pin/model/pin';

import { AuthSuccess } from './auth-success';
type AuthSuccessConnectorProps = {
  pin?: string;
};
export const AuthSuccessConnector = ({ pin }: AuthSuccessConnectorProps) => {
  const unlock = useUnit(changeAuthState);
  const onSavePin = useUnit(savePin);
  const handleConfirmAuth = () => {
    unlock('unlocked');
    if (pin) {
      onSavePin(pin);
    }
  };
  return <AuthSuccess onPress={handleConfirmAuth} />;
};
