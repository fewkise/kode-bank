import { AuthRepeatPin } from './auth-repeat-pin';
type AuthRepeatPinConnectorProps = {
  onPress: () => void;
};
export const AuthRepeatPinConnector = ({
  onPress,
}: AuthRepeatPinConnectorProps) => {
  return <AuthRepeatPin onPress={onPress} />;
};
