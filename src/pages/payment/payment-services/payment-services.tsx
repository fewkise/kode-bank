import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Search, ServiceWrapper } from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';

import { TServiceItem } from './types';

type PaymentServicesProps = {
  search: string;
  setSearch: (text: string) => void;
  isLoading: boolean;
  services: TServiceItem[];
  onPress: (serviceId: string, title: string) => void;
};
export const PaymentServices = ({
  search,
  isLoading,
  onPress,
  setSearch,
  services,
}: PaymentServicesProps) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }

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
          renderItem={({ item }) => (
            <ServiceWrapper
              iconSize={40}
              onPress={() => onPress(item.serviceId, item.serviceName)}
              source={item.serviceIcon}
              serviceName={item.serviceName}
            />
          )}
          ItemSeparatorComponent={ItemSeparatorComponent}
          keyExtractor={keyExtractor}
          initialNumToRender={10}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponent={
            <Search value={search} onChangeText={setSearch} />
          }
          ListHeaderComponentStyle={styles.header}
        />
      </View>
    </KeyboardView>
  );
};

const keyExtractor = (item: TServiceItem) => item.serviceId;

const ItemSeparatorComponent = () => <View style={styles.divider} />;

const styles = StyleSheet.create(theme => ({
  header: { padding: theme.spacing(2) },
  services: { flex: 1, backgroundColor: theme.palette.background.primary },
  divider: {
    width: '100%',
    height: 1,
  },
  forScroll: {
    backgroundColor: theme.palette.background.secondary,
  },
}));
