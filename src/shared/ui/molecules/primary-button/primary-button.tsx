import React, { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';

type Props = TouchableOpacityProps;

export const PrimaryButton = ({ children, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.root} activeOpacity={0.7} {...rest}>
      {typeof children === 'string' ? (
        <Typography variant="button" textAlign="center">
          {children}
        </Typography>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(theme => ({
  root: {
    borderRadius: 26,
    paddingVertical: theme.spacing(2),
    paddingHorizontal: theme.spacing(4),
    backgroundColor: theme.palette.button.primary,
  },
}));
