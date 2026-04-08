type DigitNumber = `${Digit}${Digit}${Digit}${Digit}`;
type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type Card = {
  id: string;
  lastFour: DigitNumber;
  name: string;
  balance: string;
  brand: string;
};
export type PaymentPayload = {
  amount: number | string;
  cardId: string;
  serviceId: string;
  phoneNumber: string;
  serviceName: string;
};
