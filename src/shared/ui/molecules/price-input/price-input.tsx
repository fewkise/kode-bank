import React, {
  TextInput as ReactTextInput,
  TextInputProps,
  View,
} from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { formatAmount, parseRawAmount } from 'utils/formatter';

import { Typography } from '@shared/ui/atoms';
type Props = TextInputI;
interface TextInputI extends TextInputProps {
  isError: boolean;
}
export const PriceInput = ({
  isError = false,
  onChangeText,
  value,
  ...rest
}: Props) => {
  const handleChange = (text: string) => {
    const formatted = formatAmount(text);
    const rawFormat = parseRawAmount(formatted);
    if (onChangeText) {
      onChangeText(rawFormat);
    }
  };
  const { theme } = useUnistyles();
  const displayValue = formatAmount(value);
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <View style={styles.displayContainer} pointerEvents="none">
          <Typography variant="title" color="primary">
            {displayValue}
          </Typography>
          <Typography variant="title"> ₽</Typography>
        </View>
        <ReactTextInput
          multiline={false}
          scrollEnabled={false}
          style={styles.hiddenInput}
          {...rest}
          keyboardAppearance={theme.name}
          keyboardType="numeric"
          selectionColor="transparent"
          caretHidden
          maxLength={12}
          value={displayValue}
          onChangeText={handleChange}
          numberOfLines={1}
        />
      </View>
      <View style={[styles.underline, isError && styles.underlineError]} />
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  hiddenInput: {
    ...StyleSheet.absoluteFillObject,
    color: 'transparent',
    fontSize: theme.typography.title.size,
  },
  container: {
    width: '100%',
    alignItems: 'flex-start',
  },
  displayContainer: {
    flexDirection: 'row',
    paddingVertical: theme.spacing(2),
    alignItems: 'baseline',
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
}));
