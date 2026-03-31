import { StackScreenProps } from '@react-navigation/stack';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native-unistyles';

import { RootStackParamsList } from '@routing/app-navigation/types';
import { IconCard } from '@shared/ui/icons';
import {
  Chip,
  PhoneInput,
  PrimaryButton,
  TextInput,
  Select,
} from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';

import { paymentPrices } from './constants';
export type PaymentCreateProps = StackScreenProps<
  RootStackParamsList,
  'paymentCreate'
>;

export const PaymentCreate = ({ navigation, route }: PaymentCreateProps) => {
  const { serviceIcon } = route.params;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sum, setSum] = useState('0');
  const [isSubmited, setSubmited] = useState(false);
  const sumError = sum === '' || sum === '0';
  const phoneNumberError = phoneNumber.length < 10;
  const handleClear = () => {
    setPhoneNumber('');
  };
  const goToConfirm = () => {
    setSubmited(true);
    if (sumError || phoneNumberError) {
      return;
    }
    navigation.navigate('paymentConfirm');
  };
  return (
    <KeyboardView>
      <View style={styles.container}>
        <View style={styles.containerCard}>
          <Text style={styles.forText}>Карта для оплаты</Text>
          <Select
            cardPhoto={IconCard}
            cardName="Карта зарплатная"
            balance="457 334,00"
          />
        </View>
        <View style={styles.containerNumber}>
          <PhoneInput
            onClear={handleClear}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Номер телефона"
            photo={serviceIcon}
            isError={isSubmited && phoneNumberError}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.forText}>Сумма</Text>
          <TextInput
            isError={isSubmited && sumError}
            value={sum}
            onChangeText={setSum}
          />
          <ScrollView contentContainerStyle={styles.scrollContainer} horizontal>
            {paymentPrices.map(item => (
              <Chip
                onPress={() => setSum(item.serviceCost)}
                key={item.serviceId}
                price={item.serviceCost}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={goToConfirm}>Продолжить</PrimaryButton>
        </View>
      </View>
    </KeyboardView>
  );
};

const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
    justifyContent: 'flex-start',
    gap: theme.spacing(2),
  },
  containerNumber: {
    alignSelf: 'stretch',
    backgroundColor: theme.palette.background.secondary,
    paddingVertical: theme.spacing(2),
    paddingHorizontal: theme.spacing(2),
  },
  containerCard: {
    width: '100%',
    paddingVertical: theme.spacing(4),
    backgroundColor: theme.palette.background.secondary,
  },
  buttonContainer: {
    paddingHorizontal: theme.spacing(2),
  },
  textInputContainer: {
    width: '100%',
    backgroundColor: theme.palette.background.secondary,
    paddingVertical: theme.spacing(2),
  },
  forText: {
    fontWeight: 600,
    fontSize: theme.typography.body15Semibold.size,
    fontFamily: theme.typography.body15Semibold.fontFamily,
    letterSpacing: theme.typography.body15Semibold.letterSpacing,
    lineHeight: theme.typography.body15Semibold.lineHeight,
    color: theme.palette.text.tertiary,
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(2),
  },
  scrollContainer: {
    gap: theme.spacing(1),
    paddingVertical: theme.spacing(1),
    backgroundColor: theme.palette.background.secondary,
    paddingHorizontal: theme.spacing(1),
  },
}));
