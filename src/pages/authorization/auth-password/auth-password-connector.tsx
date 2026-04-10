import { AuthPassword } from './auth-password';
type AuthPasswordConnectorProps = {
  onPress: () => void;
};
export const AuthPasswordConnector = ({
  onPress,
}: AuthPasswordConnectorProps) => {
  return <AuthPassword onPress={onPress} />;
};
