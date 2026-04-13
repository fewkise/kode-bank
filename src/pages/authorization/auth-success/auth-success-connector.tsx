import { AuthSuccess } from './auth-success';
type AuthSuccessConnectorProps = {
  onPress: () => void;
};
export const AuthSuccessConnector = ({
  onPress,
}: AuthSuccessConnectorProps) => {
  return <AuthSuccess onPress={onPress} />;
};
