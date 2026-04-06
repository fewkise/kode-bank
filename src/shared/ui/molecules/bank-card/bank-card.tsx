import React, { View, Image } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';
import { MasterCardIcon } from '@shared/ui/atoms/master-card-icon';
import { Images } from '@shared/ui/images';
export type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type DigitNumber = `${Digit}${Digit}${Digit}${Digit}`;
type Props = BankCardProps;
type BankCardProps = {
  cardNumber: DigitNumber;
};
export const BankCard = ({ cardNumber }: Props) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.forBackground}
        source={Images.bank_card_background}
      />
      <View style={styles.content}>
        <Typography variant="button">{cardNumber}</Typography>
        <MasterCardIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  root: {
    alignItems: 'flex-end',
    position: 'relative',
    overflow: 'hidden',
    minWidth: 60,
    minHeight: 42,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'flex-end',
    paddingRight: theme.spacing(1),
    justifyContent: 'center',
    gap: theme.spacing(0.5),
  },
  forBackground: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
}));
