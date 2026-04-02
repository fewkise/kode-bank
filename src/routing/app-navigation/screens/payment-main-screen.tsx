import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { PaymentMainConnector } from '@pages/payment';
import { RootStackParamsList } from '@routing/app-navigation/types';
import { HomeTabsParamsList } from '@routing/home-tabs-navigation';

export type PaymentMainProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabsParamsList, 'PaymentMain'>,
  StackScreenProps<RootStackParamsList>
>;
export const PaymentMainScreen = ({ navigation }: PaymentMainProps) => {
  const onPress = () => {
    navigation.navigate('paymentServices');
  };
  return <PaymentMainConnector onPress={onPress} />;
};
