import { NavigatorScreenParams } from '@react-navigation/native';

import { Card } from '@pages/payment/payment-create/types';
import { HomeTabsParamsList } from '@routing/home-tabs-navigation';
export type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type DigitNumber = `${Digit}${Digit}${Digit}${Digit}`;
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
  };
};
