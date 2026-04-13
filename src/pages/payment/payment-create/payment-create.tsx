import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native-unistyles';

import { Card } from '@entities/payment-card/types';
import { Typography } from '@shared/ui/atoms';
import {
  Chip,
  PhoneInput,
  PrimaryButton,
  PriceInput,
  Select,
} from '@shared/ui/molecules';
import { KeyboardView } from '@shared/ui/templates';

import { TPaymentPrices } from './constants';
type PaymentCreateProps = {
  phoneNumber: string;
  setPhoneNumber: (text: string) => void;
  isSubmited: boolean;
  handleClear: () => void;
  onContinue: () => void;
  sumError: boolean;
  sum: number;
  cashback: number;
  paymentPrices: TPaymentPrices[];
  setSum: (val: number) => void;
  phoneNumberError: boolean;
  serviceIcon: string;
  cardData: Card[];
};
export const PaymentCreate = ({
  phoneNumber,
  setPhoneNumber,
  isSubmited,
  handleClear,
  sumError,
  sum,
  setSum,
  cashback,
  phoneNumberError,
  serviceIcon,
  onContinue,
  paymentPrices,
  cardData,
}: PaymentCreateProps) => {
  return (
    <KeyboardView>
      <View style={styles.root}>
        <ScrollView
          style={styles.forScroll}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.containerCard}>
            <View style={styles.forText}>
              <Typography color="tertiary" variant="body15Semibold">
                Карта для оплаты
              </Typography>
            </View>
            {cardData.map(item => (
              <Select
                cardNumber={item.lastFour}
                cardName={item.name}
                balance={item.balance}
                key={item.id}
              />
            ))}
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
            {sum !== 0 || null ? (
              <View style={styles.captionContainer}>
                <Typography color="secondary" variant="caption1">
                  Ваш кешбек составит 10% - {cashback.toFixed(2)} ₽
                </Typography>
              </View>
            ) : (
              <ScrollView
                contentContainerStyle={styles.scrollContainer}
                horizontal
              >
                {paymentPrices.map(item => (
                  <Chip
                    onPress={() => setSum(item.serviceCost)}
                    key={item.serviceId}
                    label={`${item.label} ₽`}
                  />
                ))}
              </ScrollView>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onContinue}>Продолжить</PrimaryButton>
          </View>
        </ScrollView>
      </View>
    </KeyboardView>
  );
};

const styles = StyleSheet.create(theme => ({
  forScroll: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
  },
  root: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
    gap: theme.spacing(2),
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  containerNumber: {
    alignSelf: 'stretch',
    backgroundColor: theme.palette.background.secondary,
    paddingVertical: theme.spacing(3),
    paddingHorizontal: theme.spacing(2),
  },
  containerCard: {
    width: '100%',
    paddingVertical: theme.spacing(2),
    backgroundColor: theme.palette.background.secondary,
  },
  buttonContainer: {
    paddingHorizontal: theme.spacing(2),
    backgroundColor: theme.palette.background.primary,
    paddingBottom: theme.spacing(5),
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
    gap: theme.spacing(2),
    paddingVertical: theme.spacing(1),
    backgroundColor: theme.palette.background.secondary,
    paddingHorizontal: theme.spacing(1),
  },
  captionContainer: {
    paddingHorizontal: theme.spacing(2.5),
    paddingVertical: theme.spacing(1),
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: theme.spacing(2),
    gap: theme.spacing(3),
  },
}));
