import { Image, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';
import { Images } from '@shared/ui/images';
import { PrimaryButton } from '@shared/ui/molecules';
type AuthSuccessProps = {
  onPress: () => void;
};
export const AuthSuccess = ({ onPress }: AuthSuccessProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Image source={Images.success_image} />
        <Typography textAlign="center" color="primary" variant="subtitle">
          Все готово
        </Typography>
        <Typography textAlign="center" color="primary" variant="body15Regular">
          Теперь вы можете использовать мобильное приложение Kode bank
        </Typography>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onPress}>Продолжить</PrimaryButton>
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
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingHorizontal: theme.spacing(4),
    flex: 1,
  },
  center: {
    flex: 2,
  },
  buttonContainer: {
    paddingHorizontal: theme.spacing(2),
    paddingBottom: theme.spacing(5),
    alignSelf: 'stretch',
  },
}));
