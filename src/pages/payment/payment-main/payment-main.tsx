import { View, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';
import { ServiceWrapper } from '@shared/ui/molecules/service-wrapper';
import { KeyboardView } from '@shared/ui/templates';

import { TServiceItem } from './types';
type Props = {
  data: TServiceItem[];
  onPress: () => void;
};
export const PaymentMain = ({ data, onPress }: Props) => {
  return (
    <SafeAreaView style={styles.forSafe} edges={['top', 'left', 'right']}>
      <KeyboardView>
        <View style={styles.services}>
          <View style={styles.forTitle}>
            <Typography variant="largeTitle">Платежи</Typography>
          </View>

          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => {}}
                tintColor="white"
              />
            }
            data={data}
            renderItem={({ item }) => (
              <ServiceWrapper
                iconSize={24}
                onPress={onPress}
                serviceName={item.serviceName}
                IconSvg={item.serviceIcon}
              />
            )}
            keyExtractor={keyExtractor}
            initialNumToRender={10}
            ItemSeparatorComponent={ItemSeparatorComponent}
            keyboardShouldPersistTaps="handled"
          />
        </View>
      </KeyboardView>
    </SafeAreaView>
  );
};
const keyExtractor = (item: TServiceItem) => item.serviceId;

const ItemSeparatorComponent = () => <View style={styles.divider} />;

const styles = StyleSheet.create(theme => ({
  forSafe: {
    flex: 1,
    backgroundColor: theme.palette.background.secondary,
  },
  services: {
    flex: 1,
    backgroundColor: theme.palette.background.secondary,
  },
  forTitle: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(1),
    paddingHorizontal: theme.spacing(2),
  },
  divider: {
    width: '78%',
    height: 1,
    marginRight: theme.spacing(2),
    alignSelf: 'flex-end',
    backgroundColor: theme.palette.content.secondary,
  },
}));
