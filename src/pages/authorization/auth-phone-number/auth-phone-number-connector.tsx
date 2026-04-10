import { AuthPhoneNumber } from './auth-phone-number';
type AuthPhoneNumberConnectorProps = {
  onPress: () => void;
};
export const AuthPhoneNumberConnector = ({
  onPress,
}: AuthPhoneNumberConnectorProps) => {
  return <AuthPhoneNumber onPress={onPress} />;
};
