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
};
export const AuthPhoneNumber = ({
  onPress,
  phoneNumber,
  setPhoneNumber,
  phoneNumberError,
  isSubmitted,
}: AuthPhoneNumberProps) => {
  const { theme } = useUnistyles();
  return (
    <KeyboardView>
      <SafeAreaView style={styles.forSafe}>
        <View style={styles.logoContainer}>
          <Icon color={theme.palette.text.primary} name="IconLogoMedium" />
        </View>

        <ScrollView contentContainerStyle={styles.forGrow}>
          <View style={styles.forContainer}>
            <AuthInput
              placeholder="Телефон"
              isError={isSubmitted && phoneNumberError}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              isPassword={false}
            />
          </View>
        </ScrollView>
        <View style={styles.forCenter} />
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onPress}>Войти</PrimaryButton>
        </View>
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
    paddingBottom: theme.spacing(2),
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
  },
}));
