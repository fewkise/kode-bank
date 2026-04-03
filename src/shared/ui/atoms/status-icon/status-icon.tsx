import React, { View, Image } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { IconClose, IconCheck } from '@shared/ui/icons';
import { Images } from '@shared/ui/images';

type Props = StatusIcon;
type StatusIcon = {
  status: 'error' | 'done' | string;
};
export const StatusIcon = ({ status }: Props) => {
  const { theme } = useUnistyles();
  return (
    <View style={styles.root}>
      {status === 'error' ? (
        <View style={styles.root}>
          <Image
            style={styles.forInner}
            source={Images.oval_inner_background}
          />
          <Image
            style={styles.forOuter}
            source={Images.oval_outer_background}
          />
          <View style={[styles.container, styles.errorContainer]}>
            <IconClose size={40} color={theme.palette.text.primary} />
          </View>
        </View>
      ) : (
        <View style={styles.root}>
          <Image
            style={styles.forInner}
            source={Images.oval_inner_background}
          />
          <Image
            style={styles.forOuter}
            source={Images.oval_outer_background}
          />
          <View style={[styles.container, styles.successContainer]}>
            <IconCheck size={40} color={theme.palette.text.primary} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  container: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    borderRadius: '50%',
    zIndex: 2,
  },
  successContainer: {
    backgroundColor: theme.palette.indicator.done,
  },
  errorContainer: {
    backgroundColor: theme.palette.indicator.error,
  },
  forInner: {
    position: 'absolute',
    zIndex: 1,
  },
  forOuter: {
    position: 'absolute',
    zIndex: 0,
  },
}));
