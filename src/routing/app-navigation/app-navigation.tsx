import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';

export const AppNavigation = () => {
  return (
    <View style={styles.root}>
      <Typography variant="body20" color="secondary">
        App Navigation
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create(() => ({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
