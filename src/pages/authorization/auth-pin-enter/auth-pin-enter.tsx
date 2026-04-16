import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';
import { CustomKeyboard, PinIndicator } from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';
type AuthPinEnterProps = {
  pin: string;
  onKeyPress: (value: string) => void;
  length: number;
  onClear: () => void;
  isError: boolean;
  errorMessage: string;
};
export const AuthPinEnter = ({
  pin,
  onKeyPress,
  length,
  onClear,
  errorMessage,
  isError,
}: AuthPinEnterProps) => {
  return (
    <KeyboardView>
      <View style={styles.container}>
        <View style={styles.content}>
          <Typography color="primary" variant="body15Regular">
            Установите короткий код
          </Typography>
          <PinIndicator isError={isError} code={pin} maxLength={length} />
          <View style={isError ? styles.forMessage : styles.forSpace}>
            {isError && (
              <Typography color="error" variant="caption1">
                {errorMessage}
              </Typography>
            )}
          </View>
        </View>
        <View style={styles.footer}>
          <CustomKeyboard onClear={onClear} isPin={true} onPress={onKeyPress} />
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
  forMessage: {
    opacity: 1,
    height: 40,
  },
  forSpace: {
    opacity: 0,
    height: 40,
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
    gap: theme.spacing(3),
  },
  footer: {
    paddingBottom: theme.spacing(10),
    paddingHorizontal: theme.spacing(2),
    alignSelf: 'stretch',
    backgroundColor: theme.palette.background.primary,
  },
}));
