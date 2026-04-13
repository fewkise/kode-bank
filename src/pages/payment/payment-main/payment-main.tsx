import { View, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

import { TCategoryItem } from '@entities/payments/types';
import { Typography } from '@shared/ui/atoms';
import { ServiceWrapper } from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';
type Props = {
  data: TCategoryItem[];
  isRefreshing: boolean;
  onPress: (serviceName: string) => void;
  refresh: () => void;
};
export const PaymentMain = ({
  data,
  onPress,
  isRefreshing,
  refresh,
}: Props) => {
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
                refreshing={isRefreshing}
                onRefresh={refresh}
                tintColor="white"
              />
            }
            data={data}
            renderItem={({ item }) => {
              const IconName = 'Icon1Mobile';
              return (
                <ServiceWrapper
                  iconSize={24}
                  onPress={() => onPress(item.category_name)}
                  serviceName={item.category_name}
                  IconSvg={IconName}
                />
              );
            }}
            contentContainerStyle={styles.forContent}
            style={styles.forFlat}
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
const keyExtractor = (item: TCategoryItem) => item.category_id;

const ItemSeparatorComponent = () => <View style={styles.divider} />;

const styles = StyleSheet.create(theme => ({
  forSafe: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
  },
  services: {
    flex: 1,
    backgroundColor: theme.palette.background.secondary,
  },
  forTitle: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    paddingHorizontal: theme.spacing(2),
    backgroundColor: theme.palette.background.primary,
  },
  forFlat: {
    paddingTop: theme.spacing(3),
  },
  forContent: {
    flexGrow: 1,
  },
  divider: {
    width: '78%',
    height: 1,
    marginRight: theme.spacing(2),
    alignSelf: 'flex-end',
    backgroundColor: theme.palette.content.secondary,
  },
}));
