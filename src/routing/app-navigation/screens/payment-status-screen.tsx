import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { PaymentStatusConnector } from '@pages/payment';
import { RootStackParamsList } from '@routing/app-navigation/types';
import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

export type PaymentStatusProps = CompositeScreenProps<
  StackScreenProps<RootStackParamsList, 'paymentStatus'>,
  BottomTabScreenProps<HomeTabsParamsList>
>;

export const PaymentStatusScreen = ({ navigation }: PaymentStatusProps) => {
  const onPress = () => {
    navigation.navigate('HomeTabs', { screen: 'PaymentMain' });
  };
  return <PaymentStatusConnector onPress={onPress} />;
};
