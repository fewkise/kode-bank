import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamsList } from '@routing/app-navigation/types';
import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

export type PaymentMainProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabsParamsList, 'PaymentMain'>,
  StackScreenProps<RootStackParamsList>
>;
export const PaymentMainConnector = ({ navigation }: PaymentMainProps) => {
  const onPress = () => {
    navigation.navigate('paymentServices');
  };
  return { onPress };
};
