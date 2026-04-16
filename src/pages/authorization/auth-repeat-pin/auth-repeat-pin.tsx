import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';
import { CustomKeyboard, PinIndicator } from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';
type AuthRepeatPinProps = {
  pin: string;
  onKeyPress: (value: string) => void;
  onClear: () => void;
  isError: boolean;
  length: number;
  firstPin: string;
};
export const AuthRepeatPin = ({
  pin,
  onClear,
  onKeyPress,
  length,
  firstPin,
  isError,
}: AuthRepeatPinProps) => {
  return (
    <KeyboardView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.indicatorContainer}>
            <Typography color="primary" variant="body15Regular">
              Установите короткий код
            </Typography>
            <PinIndicator
              isError={isError}
              code={firstPin}
              maxLength={length}
            />
          </View>
          <View style={styles.indicatorContainer}>
            <Typography color="primary" variant="body15Regular">
              Повторите короткий код
            </Typography>
            <PinIndicator isError={isError} code={pin} maxLength={length} />
          </View>
        </View>
        <View style={styles.footer}>
          <CustomKeyboard isPin={true} onClear={onClear} onPress={onKeyPress} />
        </View>
      </View>
    </KeyboardView>
  );
};
const styles = StyleSheet.create(theme => ({
  forText: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing(3),
  },
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
    gap: theme.spacing(2),
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(4),
  },
  footer: {
    paddingBottom: theme.spacing(10),
    paddingHorizontal: theme.spacing(2),
    alignSelf: 'stretch',
    backgroundColor: theme.palette.background.primary,
  },
  indicatorContainer: {
    gap: theme.spacing(2),
  },
}));
