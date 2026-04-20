import { useHeaderHeight } from '@react-navigation/elements';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
type TKeyboardViewProps = {
  children: React.ReactNode;
};

export const KeyboardView = ({ children }: TKeyboardViewProps) => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={styles.root}
      contentContainerStyle={styles.root}
      enabled={Platform.OS === 'ios'}
      behavior="padding"
      keyboardVerticalOffset={headerHeight || 0}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create(theme => ({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.background.primary,
  },
}));
