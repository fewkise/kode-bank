import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { InputFull, PrimaryButton } from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';

import {
  PaymentConfirmProps,
  PaymentConfirmConnector,
} from './payment-confirm-connector';
export const PaymentConfirmScreen = (props: PaymentConfirmProps) => {
  const { mockdata, goToStatus, openLink } = PaymentConfirmConnector({
    navigation: props.navigation,
    route: props.route,
  });
  return (
    <KeyboardView>
      <View style={styles.container}>
        <View style={styles.containerTwo}>
          {mockdata.map(item => (
            <InputFull key={item.id} label={item.label} value={item.value} />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={goToStatus}>Подтвердить</PrimaryButton>
        </View>
        <TouchableOpacity onPress={openLink}>
          <Text style={styles.forLink}>
            Нажимая «Подтвердить», вы соглашаетесь с условиями проведения
            операции
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardView>
  );
};
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
