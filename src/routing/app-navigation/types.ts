import { ImageSourcePropType } from 'react-native';

import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

export type RootStackParamsList = {
  HomeTabs: HomeTabsParamsList;
  paymentServices: undefined;
  paymentCreate: {
    serviceId: string;
    title: string;
    serviceIcon: ImageSourcePropType;
  };
  paymentConfirm: undefined;
  paymentStatus: undefined;
};
