import { ImageSourcePropType } from 'react-native';

export type TStatus = 'error' | 'success';
export type PaymentPayload = {
  amount: number | string;
  cardId: string;
  serviceId: string;
  phoneNumber: string;
  serviceName: string;
};
export type TServiceItem = {
  service_id: string;
  service_name: string;
  service_icon: ImageSourcePropType;
};
export type TCategoryItem = {
  category_id: string;
  category_name: string;
};
export type TInputFull = {
  label: string;
  value: string;
  id: string;
};
