import { AuthInstallationPin } from './auth-installation-pin';
type AuthInstallationPinConnectorProps = {
  onPress: () => void;
};
export const AuthInstallationPinConnector = ({
  onPress,
}: AuthInstallationPinConnectorProps) => {
  return <AuthInstallationPin onPress={onPress} />;
};
