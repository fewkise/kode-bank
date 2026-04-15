import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { Icon, Typography } from '@shared/ui/atoms';
import { AuthInput, PrimaryButton } from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';
type AuthPasswordProps = {
  onPress: () => void;
  password: string;
  isSubmitted: boolean;
  setPassword: (text: string) => void;
  passwordError: boolean;
  message: string;
  isLoading: boolean;
};
export const AuthPassword = ({
  onPress,
  password,
  setPassword,
  isSubmitted,
  message,
  isLoading,
  passwordError,
}: AuthPasswordProps) => {
  const { theme } = useUnistyles();
  return (
    <KeyboardView>
      <SafeAreaView style={styles.forSafe}>
        <View style={styles.logoContainer}>
          <Icon color={theme.palette.text.primary} name="IconLogoMedium" />
        </View>

        <ScrollView contentContainerStyle={styles.forGrow}>
          <View style={styles.forContainer}>
            <Typography
              color={isSubmitted && passwordError ? 'error' : 'primary'}
              variant="body15Regular"
            >
              {message}
            </Typography>
            <AuthInput
              placeholder="Пароль"
              isError={isSubmitted && passwordError}
              value={password}
              onChangeText={setPassword}
              isPassword={true}
            />
          </View>
        </ScrollView>
        <View style={styles.forCenter} />
        <View style={styles.buttonContainer}>
          <PrimaryButton disabled={isLoading} onPress={onPress}>
            Войти
          </PrimaryButton>
        </View>
      </SafeAreaView>
    </KeyboardView>
  );
};
const styles = StyleSheet.create(theme => ({
  forContainer: {
    alignItems: 'center',
    gap: theme.spacing(2),
    paddingHorizontal: theme.spacing(2),
  },
  forCenter: {
    flex: 1,
  },
  forGrow: {
    flexGrow: 1,
  },
  forSafe: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
  },
  buttonContainer: {
    marginTop: 'auto',
    paddingHorizontal: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: theme.spacing(-10),
  },
}));
