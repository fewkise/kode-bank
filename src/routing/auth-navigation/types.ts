import { NavigatorScreenParams } from '@react-navigation/native';

import { AuthConfirmResponse, OtpResponse } from '@entities/auth/types';
import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

export type AuthStackParamsList = {
  authSuccess: undefined;
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
  HomeTabs: NavigatorScreenParams<HomeTabsParamsList>;
};
