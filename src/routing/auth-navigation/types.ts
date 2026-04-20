import { NavigatorScreenParams } from '@react-navigation/native';

import { AuthConfirmResponse, OtpResponse } from '@entities/auth/types';
import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

export type AuthStackParamsList = {
  authSuccess: {
    pin?: string;
  };
  authPassword: {
    result: AuthConfirmResponse;
  };
  authCreatePin: undefined;
  authPhoneNumber: undefined;
  authOtp: {
    data: OtpResponse;
    phoneNumber: string;
  };
  authPinPreview: undefined;
  authRepeatPin: {
    code: string;
  };
  authPinEnter: undefined;
  HomeTabs: NavigatorScreenParams<HomeTabsParamsList>;
};
export type TAuthNavigatorState = 'pin-create' | 'pin-auth' | 'auth' | 'setup';
