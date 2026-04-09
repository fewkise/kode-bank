import React, { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';

type Props = InputFullProps;
interface InputFullProps {
  label: string;
  value: string;
}
export const InputFull = ({ label, value, ...rest }: Props) => {
  return (
    <View style={styles.root} {...rest}>
      <Typography color="tertiary" variant="caption1">
        {label}
      </Typography>
      <Typography variant="body20">{value}</Typography>
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  root: {
    alignSelf: 'stretch',
    paddingVertical: theme.spacing(2.5),
    paddingHorizontal: theme.spacing(3),
    gap: theme.spacing(0.5),
    backgroundColor: theme.palette.background.primary,
  },
}));
