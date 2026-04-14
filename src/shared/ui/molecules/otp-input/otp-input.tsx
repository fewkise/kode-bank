import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';
type OtpInputProps = {
  code: string;
  setCode: (code: string) => void;
  length?: number;
  isError: boolean;
};

export const OtpInput = ({ code, length = 6, isError }: OtpInputProps) => {
  const middle = length / 2 - 1;

  return (
    <View style={[styles.cellsRow, !isError && styles.cellRowError]}>
      {Array.from({ length }).map((_, i) => {
        const isActive = i === code.length;
        return (
          <React.Fragment key={i}>
            <View style={[styles.cell]}>
              <Typography
                color={isError ? 'error' : 'primary'}
                variant="subtitle"
              >
                {code[i] || ''}
              </Typography>
              {isActive && <View style={styles.activeLine} />}
            </View>
            {i === middle && i !== length - 1 && (
              <Typography color="secondary" variant="subtitle">
                —
              </Typography>
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  cellsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  cellRowError: {
    paddingBottom: theme.spacing(5),
  },
  activeLine: {
    width: '65%',
    height: 1,
    borderBottomWidth: 2,
    borderBottomColor: theme.palette.button.primary,
  },
  cell: {
    width: 40,
    height: 48,
    backgroundColor: theme.palette.content.secondary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dash: {
    color: theme.palette.text.primary,
    fontSize: 20,
    marginHorizontal: theme.spacing(1),
  },
}));
