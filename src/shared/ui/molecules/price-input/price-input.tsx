import React, { View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
type Props = {
  isError: boolean;
  value: number;
  onChangeText: (value: number) => void;
};
export const PriceInput = ({ isError = false, onChangeText, value }: Props) => {
  const { theme } = useUnistyles();
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <MaskedTextInput
          type="currency"
          value={String(value)}
          options={{
            prefix: '',
            decimalSeparator: '.',
            groupSeparator: ' ',
            precision: 0,
          }}
          keyboardAppearance={theme.name}
          onChangeText={(text, rawText) => {
            onChangeText(Number(rawText));
          }}
          style={[styles.input]}
          keyboardType="numeric"
        />
      </View>
      <View style={[styles.underline, isError && styles.underlineError]} />
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  container: {
    width: '100%',
    alignItems: 'flex-start',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.palette.background.secondary,
    borderRadius: 26,
    borderBottomColor: theme.palette.background.primary,
    paddingHorizontal: theme.spacing(2),
    alignSelf: 'flex-start',
  },
  underline: {
    height: 1,
    backgroundColor: theme.palette.content.secondary,
    width: '90%',
    alignSelf: 'center',
  },
  underlineError: {
    backgroundColor: theme.palette.indicator.error,
  },
  input: {
    fontSize: theme.typography.title.size,
    fontWeight: theme.typography.title.fontWeight,
    padding: 0,
    flex: 1,
    color: theme.palette.text.primary,
    paddingVertical: theme.spacing(2),
  },
}));
