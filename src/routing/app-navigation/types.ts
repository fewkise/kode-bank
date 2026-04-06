import { NavigatorScreenParams } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';

import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

export type RootStackParamsList = {
  HomeTabs: NavigatorScreenParams<HomeTabsParamsList>;
  paymentServices: undefined;
  paymentCreate: {
    serviceId: string;
    title: string;
    serviceIcon: ImageSourcePropType;
  };
  paymentConfirm: undefined;
  paymentStatus: undefined;
};
