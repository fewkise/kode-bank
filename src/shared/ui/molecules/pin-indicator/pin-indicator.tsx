import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
type Props = {
  code: string;
  maxLength: number;
  isError?: boolean;
};

export const PinIndicator = ({ code, maxLength, isError }: Props) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: maxLength }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index < code.length ? styles.activeDot : styles.inactiveDot,
            isError && styles.errorDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(3),
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
  },
  activeDot: {
    backgroundColor: theme.palette.indicator.success,
    borderColor: theme.palette.indicator.success,
  },
  inactiveDot: {
    backgroundColor: 'transparent',
    borderColor: theme.palette.text.tertiary,
  },
  errorDot: {
    borderColor: theme.palette.indicator.error,
    backgroundColor: theme.palette.indicator.error,
  },
}));
