import React from 'react';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { Icon } from '@shared/ui/atoms';

type StatusIconProps = {
  status: 'error' | 'success';
};

export const StatusIcon = ({ status }: StatusIconProps) => {
  const { theme } = useUnistyles();

  const isError = status === 'error';
  const IconName = isError ? 'IconClose' : 'IconCheck';

  return (
    <View style={styles.root}>
      <View style={styles.forInner} />
      <View style={styles.forOuter} />
      <View style={styles.statusContainer(status)}>
        <Icon name={IconName} size={40} color={theme.palette.text.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  statusContainer: (status: string) => ({
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    zIndex: 2,
    backgroundColor:
      status === 'error'
        ? theme.palette.indicator.error
        : theme.palette.indicator.done,
  }),
  forInner: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: theme.palette.content.tertiary,
    width: 112,
    height: 112,
    borderRadius: '50%',
    opacity: 0.12,
  },
  forOuter: {
    position: 'absolute',
    zIndex: 0,
    width: 150,
    height: 150,
    opacity: 0.05,
    backgroundColor: theme.palette.content.tertiary,
    borderRadius: '50%',
  },
}));
