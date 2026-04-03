import { ImageSourcePropType, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native-unistyles';

import { Typography } from '@shared/ui/atoms';
import {
  Chip,
  PhoneInput,
  PrimaryButton,
  PriceInput,
  Select,
} from '@shared/ui/molecules';
import { DigitNumber } from '@shared/ui/molecules/bank-card/bank-card';
import { KeyboardView } from '@shared/ui/templates';

import { TPaymentPrices } from './constants';

type PaymentCreateProps = {
  phoneNumber: string;
  setPhoneNumber: (text: string) => void;
  isSubmited: boolean;
  cardNumber: DigitNumber;
  handleClear: () => void;
  onContinue: () => void;
  sumError: boolean;
  sum: string;
  paymentPrices: TPaymentPrices[];
  setSum: (val: string) => void;
  phoneNumberError: boolean;
  serviceIcon: ImageSourcePropType;
};
export const PaymentCreate = ({
  phoneNumber,
  setPhoneNumber,
  isSubmited,
  cardNumber,
  handleClear,
  sumError,
  sum,
  setSum,
  phoneNumberError,
  serviceIcon,
  onContinue,
  paymentPrices,
}: PaymentCreateProps) => {
  return (
    <KeyboardView>
      <ScrollView style={styles.container}>
        <View style={styles.containerCard}>
          <View style={styles.forText}>
            <Typography color="tertiary" variant="body15Semibold">
              Карта для оплаты
            </Typography>
          </View>

          <Select
            cardNumber={cardNumber}
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
          <View style={styles.forText}>
            <Typography color="tertiary" variant="body15Semibold">
              Сумма
            </Typography>
          </View>

          <PriceInput
            isError={isSubmited && sumError}
            value={sum}
            onChangeText={setSum}
          />
          <ScrollView contentContainerStyle={styles.scrollContainer} horizontal>
            {paymentPrices.map(item => (
              <Chip
                onPress={() => setSum(item.serviceCost)}
                key={item.serviceId}
                label={`${item.serviceCost} ₽`}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onContinue}>Продолжить</PrimaryButton>
        </View>
      </ScrollView>
    </KeyboardView>
  );
};

const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
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
