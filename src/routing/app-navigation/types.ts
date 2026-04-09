import { NavigatorScreenParams } from '@react-navigation/native';

import { TStatus } from '@pages/payment/payment-status/types';
import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

import { Card } from './entities/card/types';

export type RootStackParamsList = {
  HomeTabs: NavigatorScreenParams<HomeTabsParamsList>;
  paymentServices: undefined;
  paymentCreate: {
    serviceId: string;
    title: string;
    serviceIcon: string;
  };
  paymentConfirm: {
    cardData: Card[];
    payload: {
      cardId: string;
      amount: number | string;
      serviceId: string;
      phoneNumber: string;
      serviceName: string;
    };
  };
  paymentStatus: {
    paymentId: string;
    amount: number | string;
    status: TStatus;
  };
};
