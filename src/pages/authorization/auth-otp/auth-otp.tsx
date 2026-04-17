import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { AuthConfirmResponse } from '@entities/auth/types';
import { Typography } from '@shared/ui/atoms';
import { CustomKeyboard, OtpInput } from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';
type AuthOtpProps = {
  onPress: (result: AuthConfirmResponse) => void;
  code: string;
  errorMessage: string;
  isError: boolean;
  onKeyPress: (val: string) => void;
  timerText: string;
  onResend: () => void;
  canResend: boolean;
  isLoading: boolean;
};
export const AuthOtp = ({
  code,
  errorMessage,
  isError,
  timerText,
  onKeyPress,
  canResend,
  isLoading,
  onResend,
}: AuthOtpProps) => {
  return (
    <KeyboardView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.forText}>
            <Typography textAlign="center" variant="body15Regular">
              На ваш номер отправлено SMS с кодом подтверждения.
            </Typography>
          </View>
          <OtpInput isError={isError} code={code} length={6} />
          <View style={isError ? styles.forErrorText : styles.forSpace}>
            {isError && (
              <Typography color="error" variant="caption2">
                {errorMessage}
              </Typography>
            )}
          </View>
        </View>

        <View style={styles.footer}>
          <CustomKeyboard
            isPin={false}
            isLoading={isLoading}
            canResend={canResend}
            onResend={onResend}
            timerText={timerText}
            onPress={onKeyPress}
          />
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
    gap: theme.spacing(3),
  },
  footer: {
    paddingBottom: theme.spacing(10),
    paddingHorizontal: theme.spacing(2),
    alignSelf: 'stretch',
    backgroundColor: theme.palette.background.primary,
  },
  forErrorText: {
    opacity: 1,
    height: 40,
  },
  forSpace: {
    opacity: 0,
    height: 40,
  },
}));
