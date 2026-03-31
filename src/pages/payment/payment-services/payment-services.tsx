import { StackScreenProps } from '@react-navigation/stack';
import { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  ListRenderItem,
  RefreshControl,
  ActivityIndicator,
  TextInput,
} from 'react-native';

import { RootStackParamsList } from '@routing/app-navigation/types';
import { KeyboardView } from '@shared/ui/templates';
import { darkTheme } from '@shared/ui/theme';

import { services } from './constants';
import { TServiceItem } from './types';

export type PaymentServicesProps = StackScreenProps<
  RootStackParamsList,
  'paymentServices'
>;

export const PaymentServices = ({ navigation }: PaymentServicesProps) => {
  const isLoading = false;

  const [search, setSearch] = useState('');

  const onPress = (serviceId: string, title: string, serviceIcon: any) => {
    navigation.navigate('paymentCreate', { serviceId, title, serviceIcon });
  };

  const renderItem: ListRenderItem<TServiceItem> = ({
    item: { serviceId, serviceIcon, serviceName },
  }) => {
    return (
      <TouchableOpacity
        style={styles.serviceWrapper}
        onPress={() => onPress(serviceId, serviceName, serviceIcon)}
      >
        <Image source={serviceIcon} />
        <Text>{serviceName}</Text>
      </TouchableOpacity>
    );
  };

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
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparatorComponent}
          keyExtractor={keyExtractor}
          initialNumToRender={10}
          keyboardShouldPersistTaps="handled"
          ListHeaderComponent={
            <TextInput
              placeholder="Поиск"
              placeholderTextColor={darkTheme.palette.text.tertiary}
              style={styles.input}
              value={search}
              onChangeText={setSearch}
              keyboardType="email-address"
              keyboardAppearance="dark"
            />
          }
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
    backgroundColor: 'grey',
    padding: 16,
  },
  divider: {
    width: '100%',
    height: 1,
  },
});
