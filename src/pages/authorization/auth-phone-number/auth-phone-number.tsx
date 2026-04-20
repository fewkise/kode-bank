import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { Icon } from '@shared/ui/atoms';
import { AuthInput, PrimaryButton } from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';
type AuthPhoneNumberProps = {
  onPress: () => void;
  phoneNumber: string;
  phoneNumberError: boolean;
  isSubmitted: boolean;
  setPhoneNumber: (text: string) => void;
  isLoading: boolean;
};
export const AuthPhoneNumber = ({
  onPress,
  phoneNumber,
  setPhoneNumber,
  phoneNumberError,
  isSubmitted,
  isLoading,
}: AuthPhoneNumberProps) => {
  const { theme } = useUnistyles();
  return (
    <KeyboardView>
      <SafeAreaView style={styles.forSafe}>
        <ScrollView
          contentContainerStyle={styles.forGrow}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoContainer}>
            <Icon color={theme.palette.text.primary} name="IconLogoMedium" />
          </View>

          <View style={styles.forContainer}>
            <AuthInput
              isLoading={isLoading}
              placeholder="Телефон"
              isError={isSubmitted && phoneNumberError}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              isPassword={false}
            />
          </View>

          <View style={styles.forCenter} />
          <View style={styles.buttonContainer}>
            <PrimaryButton disabled={isLoading} onPress={onPress}>
              Войти
            </PrimaryButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardView>
  );
};
const styles = StyleSheet.create(theme => ({
  forContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 2,
    paddingHorizontal: theme.spacing(2),
  },
  forCenter: {
    flex: 3,
  },
  forGrow: {
    flexGrow: 1,
  },
  forSafe: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
  },
  buttonContainer: {
    paddingHorizontal: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: theme.spacing(2),
    flex: 1,
  },
}));
