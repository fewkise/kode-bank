import { NavigatorScreenParams } from '@react-navigation/native';

import { Card } from '@entities/payment-card/types';
import { TStatus } from '@entities/payments/types';
import { AuthStackParamsList } from '@routing/auth-navigation/types';
import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

export type RootStackParamsList = {
  HomeTabs: NavigatorScreenParams<HomeTabsParamsList>;
  AuthNavigation: NavigatorScreenParams<AuthStackParamsList>;
  paymentServices: {
    serviceName: string;
  };
  paymentCreate: {
    serviceId: string;
    title: string;
    serviceIcon: string;
  };
  authPinEnter: undefined;
  paymentConfirm: {
    cardData: Card[];
    payload: {
      cardId: string;
      amount: number;
      serviceId: string;
      phoneNumber: string;
      serviceName: string;
    };
  };
  paymentStatus: {
    paymentId: string;
    amount: number;
    status: TStatus;
  };
};
