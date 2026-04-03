import { NavigatorScreenParams } from '@react-navigation/native';

import { HomeTabsParamsList } from '@routing/home-tabs-navigation';
export type RootStackParamsList = {
  HomeTabs: NavigatorScreenParams<HomeTabsParamsList>;
  paymentServices: undefined;
  paymentCreate: { serviceId: string; title: string };
  paymentConfirm: undefined;
  paymentStatus: undefined;
};
