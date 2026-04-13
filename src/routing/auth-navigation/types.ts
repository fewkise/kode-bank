import { NavigatorScreenParams } from '@react-navigation/native';

import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

export type AuthStackParamsList = {
  authSuccess: undefined;
  authPassword: undefined;
  authCreatePin: undefined;
  authPhoneNumber: undefined;
  authOtp: undefined;
  authPinPreview: undefined;
  authRepeatPin: undefined;
  authPinEnter: undefined;
  HomeTabs: NavigatorScreenParams<HomeTabsParamsList>;
};
