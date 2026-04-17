import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { PrimaryButton } from '@shared/ui/molecules';

type ProfileMainProps = {
  onPress: () => void;
  isLoading: boolean;
};

export const ProfileMain = ({ onPress, isLoading }: ProfileMainProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.buttonContainer}>
        <PrimaryButton disabled={isLoading} onPress={onPress}>
          Выйти
        </PrimaryButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create(theme => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    flex: 1,
    paddingHorizontal: theme.spacing(2),
    backgroundColor: theme.palette.background.primary,
  },
  buttonContainer: {
    paddingHorizontal: theme.spacing(2),
    paddingBottom: theme.spacing(5),
    alignSelf: 'stretch',
  },
}));
