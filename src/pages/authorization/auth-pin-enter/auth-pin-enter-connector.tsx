import { AuthPinEnter } from './auth-pin-enter';
type AuthPinEnterConnectorProps = {
  onPress: () => void;
};
export const AuthPinEnterConnector = ({
  onPress,
}: AuthPinEnterConnectorProps) => {
  return <AuthPinEnter onPress={onPress} />;
};
