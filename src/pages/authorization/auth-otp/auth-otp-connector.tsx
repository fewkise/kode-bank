import { AuthOtp } from './auth-otp';
type AuthOtpConnectorProps = {
  onPress: () => void;
};
export const AuthOtpConnector = ({ onPress }: AuthOtpConnectorProps) => {
  return <AuthOtp onPress={onPress} />;
};
