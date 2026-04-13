import { AuthCreatePin } from './auth-create-pin';
type AuthCreatePinConnectorProps = {
  onPress: () => void;
};
export const AuthCreatePinConnector = ({
  onPress,
}: AuthCreatePinConnectorProps) => {
  return <AuthCreatePin onPress={onPress} />;
};
