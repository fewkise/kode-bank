import React, { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';
type Props = ChipProps & TouchableOpacityProps;
type ChipProps = {
  label: string;
};
export const Chip = ({ label, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.root} activeOpacity={0.7} {...rest}>
      <Typography variant="caption1" textAlign="center">
        {label}
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
