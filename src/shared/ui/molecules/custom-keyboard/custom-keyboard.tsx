import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';

type CustomKeyboardProps = {
  onPress: (val: string) => void;
  canResend?: boolean;
  onResend?: () => void;
  timerText?: string;
  isPin: boolean;
  onClear?: () => void;
};

export const CustomKeyboard = ({
  onPress,
  timerText,
  onResend,
  canResend,
  isPin,
  onClear,
}: CustomKeyboardProps) => {
  const Key = ({ val, label }: { val: string; label?: string }) => (
    <TouchableOpacity style={styles.key} onPress={() => onPress(val)}>
      <Typography variant="largeTitle">{label || val}</Typography>
    </TouchableOpacity>
  );

  const buttons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <View style={styles.container}>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(n => (
            <Key key={n} val={n.toString()} />
          ))}
        </View>
      ))}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.forTimerText}
          disabled={isPin ? false : !canResend}
          onPress={() => (isPin ? onClear?.() : onResend?.())}
        >
          <Typography textAlign="center" color="secondary" variant="caption1">
            {isPin ? 'Сбросить' : timerText}
          </Typography>
        </TouchableOpacity>
        <Key val="0" />
        <Key val="back" label="⌫" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  container: {
    paddingHorizontal: theme.spacing(2.5),
    alignSelf: 'stretch',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  key: {
    width: '30%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forTimerText: {
    width: '30%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
