import React, {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';
import { IconChevronDown } from '@shared/ui/icons';
interface SelectProps extends TouchableOpacityProps {
  balance: string | number;
  cardName: string;
  cardPhoto: any;
}
type Props = SelectProps;
export const Select = ({ balance, cardPhoto, cardName, ...rest }: Props) => {
  const Icon = cardPhoto;
  const { theme } = useUnistyles();
  return (
    <TouchableOpacity style={styles.root} activeOpacity={0.7} {...rest}>
      <View style={styles.cardContainer}>
        <Icon size={24} color={theme.palette.text.tertiary} />
        <View style={styles.textContainer}>
          <Typography variant="body15Regular">{cardName}</Typography>
          <Typography variant="body15Regular">{balance} ₽</Typography>
        </View>
      </View>
      <IconChevronDown size={24} color={theme.palette.text.tertiary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(theme => ({
  root: {
    paddingVertical: theme.spacing(2),
    paddingHorizontal: theme.spacing(2),
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    rowGap: theme.spacing(2),
  },
  cardContainer: {
    flexDirection: 'row',
    gap: theme.spacing(3),
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
  },
}));
