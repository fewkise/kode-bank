import { TAuthState } from '@features/auth/model/auth-state';

export type TAppState = 'auth' | 'unlocked';

type TOptions = {
  authState: TAuthState;
  loggedIn: boolean;
};

export const getAppState = ({ loggedIn, authState }: TOptions): TAppState => {
  if (authState !== 'unlocked') {
    return 'auth';
  }

  if (authState === 'unlocked' && loggedIn) {
    return 'unlocked';
  }
  return 'auth';
};
