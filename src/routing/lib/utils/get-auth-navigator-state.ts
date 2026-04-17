import { TAuthState } from '@features/auth/model/auth-state';
import { TAuthNavigatorState } from '@routing/auth-navigation/types';

type TArgs = {
  authState: TAuthState;
  loggedIn: boolean;
  hasPin: boolean;
};

export const getAuthNavigatorState = ({
  authState,
  loggedIn,
  hasPin,
}: TArgs): TAuthNavigatorState => {
  if (!loggedIn) {
    return 'auth';
  }
  if (!hasPin) {
    return 'pin-create';
  }
  if (authState === 'setup') {
    return 'setup';
  }
  if (authState === 'locked') {
    return 'pin-auth';
  }

  return 'auth';
};
