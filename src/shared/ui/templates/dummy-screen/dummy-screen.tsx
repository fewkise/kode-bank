import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';

type TDummyScreenProps = {
  title?: string;
  children?: React.ReactNode;
};

export const DummyScreen = ({ title, children }: TDummyScreenProps) => {
  return (
    <View style={styles.root}>
      {title && <Typography>{title}</Typography>}

      {children && <>{children}</>}
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
