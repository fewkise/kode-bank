import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { InputFull, PrimaryButton } from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';

import { PaymentPayload } from '../payment-create/types';

export type PaymentConfirmProps = {
  onConfirm: () => void;
  onLinkPress: () => void;
  payload: PaymentPayload;
  mapdata: Array<{ label: string; value: string; id: string }>;
};
export const PaymentConfirm = ({
  onConfirm,
  onLinkPress,
  mapdata,
}: PaymentConfirmProps) => (
  <KeyboardView>
    <View style={styles.container}>
      <View style={styles.containerTwo}>
        {mapdata.map(item => (
          <InputFull key={item.id} label={item.label} value={item.value} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onConfirm}>Подтвердить</PrimaryButton>
      </View>
      <TouchableOpacity onPress={onLinkPress}>
        <Text style={styles.forLink}>
          Нажимая «Подтвердить», вы соглашаетесь с условиями проведения операции
        </Text>
      </TouchableOpacity>
    </View>
  </KeyboardView>
);
const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
    justifyContent: 'flex-start',
    paddingBottom: theme.spacing(7),
    gap: theme.spacing(3),
  },
  forLink: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: theme.palette.text.primary,
    textAlign: 'center',
    alignSelf: 'center',
  },
  containerTwo: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    paddingHorizontal: theme.spacing(2),
  },
}));
