import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  FlatList,
  ListRenderItem,
  RefreshControl,
} from 'react-native';

import { HomeTabsParamsList } from '@routing/home-tabs-navigation';
import { KeyboardView } from '@shared/ui/templates';
import { darkTheme } from '@shared/ui/theme';

import { services } from './constants';
import { TServiceItem } from './types';
export type PaymentMainProps = BottomTabScreenProps<
  HomeTabsParamsList,
  'PaymentMain'
>;
export const PaymentMain = ({ navigation }: PaymentMainProps) => {
  const onPress = () => {
    navigation.navigate('paymentServices');
  };

  const renderItem: ListRenderItem<TServiceItem> = ({
    item: { serviceIcon, serviceName },
  }) => {
    const Icon = serviceIcon;
    return (
      <TouchableOpacity style={styles.serviceWrapper} onPress={onPress}>
        <View style={styles.fon}>
          <Icon size={24} color="white" />
        </View>
        <Text>{serviceName}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <KeyboardView>
      <View style={styles.services}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {}}
              tintColor="white"
            />
          }
          data={services}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={10}
          ItemSeparatorComponent={ItemSeparatorComponent}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponentStyle={styles.header}
        />
      </View>
    </KeyboardView>
  );
};
const keyExtractor = (item: TServiceItem) => item.serviceId;

const ItemSeparatorComponent = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  header: { padding: 12 },
  input: {
    padding: 16,
    backgroundColor: darkTheme.palette.content.secondary,
    color: 'white',
    borderRadius: 16,
  },
  services: { flex: 1, backgroundColor: darkTheme.palette.background.primary },
  serviceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'white',
    padding: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#F3F3F3',
  },
  fon: {
    backgroundColor: '#515FE1',
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
