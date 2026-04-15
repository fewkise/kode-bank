import { NavigatorScreenParams } from '@react-navigation/native';

import { OtpResponse } from '@entities/auth/types';
import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

export type AuthStackParamsList = {
  authSuccess: undefined;
  authPassword: undefined;
  authCreatePin: undefined;
  authPhoneNumber: undefined;
  authOtp: {
    data: OtpResponse;
  };
  authPinPreview: undefined;
  authRepeatPin: {
    code: string;
  };
  authPinEnter: undefined;
  HomeTabs: NavigatorScreenParams<HomeTabsParamsList>;
};
