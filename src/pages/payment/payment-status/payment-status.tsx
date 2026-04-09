import { View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

import { TStatus } from '@entities/payments/types';
import { StatusIndicator, PrimaryButton } from '@shared/ui/molecules';

type Props = {
  onPress: () => void;
  status: TStatus;
  isLoading: boolean;
  amount: string | number;
};
export const PaymentStatus = ({
  onPress,
  status,
  isLoading,
  amount,
}: Props) => {
  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView style={styles.forSafe}>
      <View style={styles.spacer} />
      <View style={styles.centered}>
        <StatusIndicator sum={amount} status={status} />
      </View>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onPress}>Готово</PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
  },
  forSafe: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
  },
  spacer: {
    flex: 1,
  },
  centered: {
    justifyContent: 'center',
    flex: 2,
    alignItems: 'center',
  },
  buttonContainer: {
    paddingHorizontal: theme.spacing(2),
    marginTop: 'auto',
    paddingBottom: theme.spacing(2),
  },
}));
