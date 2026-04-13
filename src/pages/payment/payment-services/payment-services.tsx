import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { TServiceItem } from '@entities/payments/types';
import { Search, ServiceWrapper } from '@shared/ui/molecules';

type PaymentServicesProps = {
  search: string;
  setSearch: (text: string) => void;
  isLoading: boolean;
  isRefreshing: boolean;
  refresh: () => void;
  services: TServiceItem[];
  onPress: (serviceId: string, title: string, serviceIcon: string) => void;
};
export const PaymentServices = ({
  search,
  isLoading,
  onPress,
  setSearch,
  isRefreshing,
  services,
  refresh,
}: PaymentServicesProps) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.services}>
      <View style={styles.header}>
        <Search value={search} onChangeText={setSearch} />
      </View>
      <FlatList
        style={styles.forScroll}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refresh}
            tintColor="white"
          />
        }
        contentContainerStyle={styles.forGrow}
        data={services}
        renderItem={({ item }) => (
          <ServiceWrapper
            iconSize={40}
            onPress={() =>
              onPress(
                item.service_id,
                item.service_name,
                String(item.service_icon),
              )
            }
            source={String(item.service_icon ?? '')}
            serviceName={item.service_name}
          />
        )}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={keyExtractor}
        initialNumToRender={10}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
};

const keyExtractor = (item: TServiceItem) => item.service_id;

const ItemSeparatorComponent = () => <View style={styles.divider} />;

const styles = StyleSheet.create(theme => ({
  header: { padding: theme.spacing(2) },
  services: { flex: 1, backgroundColor: theme.palette.background.primary },
  divider: {
    width: '100%',
    height: 1,
  },
  forGrow: {
    flexGrow: 1,
  },
  forScroll: {
    flex: 1,
  },
}));
