import { NavigatorScreenParams } from '@react-navigation/native';

import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

export type AuthStackParamsList = {
  authSuccess: undefined;
  authPassword: undefined;
  authInstallationPin: undefined;
  authPhoneNumber: undefined;
  authOtp: undefined;
  HomeTabs: NavigatorScreenParams<HomeTabsParamsList>;
};
