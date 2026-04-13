import { AuthPinPreview } from './auth-pin-preview';
type AuthPinPreviewConnectorProps = {
  onPress: () => void;
};
export const AuthPinPreviewConnector = ({
  onPress,
}: AuthPinPreviewConnectorProps) => {
  return <AuthPinPreview onPress={onPress} />;
};
