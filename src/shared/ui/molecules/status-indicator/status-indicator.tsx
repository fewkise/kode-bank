import React, { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography, StatusIcon } from '@shared/ui/atoms';

type Props = StatusIndicatorProps;
type StatusIndicatorProps = {
  status: 'error' | 'success' | string;
  sum: string | number;
};
export const StatusIndicator = ({ status, sum }: Props) => {
  return (
    <View style={styles.root}>
      <StatusIcon status={status} />
      <View style={styles.container}>
        <Typography color="tertiary" variant="body17Regular">
          {status === 'done' ? 'Оплачено' : 'Платеж отклонен'}
        </Typography>
        <Typography color="primary" variant="title">
          {sum} ₽
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  root: {
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing(2),
    paddingHorizontal: theme.spacing(4),
    gap: theme.spacing(7),
  },
  container: {
    gap: theme.spacing(1),
    alignItems: 'center',
  },
}));
