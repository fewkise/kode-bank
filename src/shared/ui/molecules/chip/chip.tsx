import React, { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';

interface ChipProps extends TouchableOpacityProps {
  price?: string | number;
  text?: string | number;
}
export const Chip = ({ price, text, ...rest }: ChipProps) => {
  const content = price !== undefined ? `${price} ₽ ` : text;
  return (
    <TouchableOpacity style={styles.root} activeOpacity={0.7} {...rest}>
      <Typography variant="caption1" textAlign="center">
        {content}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(theme => ({
  root: {
    borderRadius: 26,
    alignSelf: 'flex-start',
    maxWidth: 150,
    paddingVertical: theme.spacing(1),
    paddingHorizontal: theme.spacing(2),
    backgroundColor: theme.palette.content.secondary,
  },
}));
