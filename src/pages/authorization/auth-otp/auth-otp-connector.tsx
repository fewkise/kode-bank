import { OtpResponse } from '@entities/auth/types';

import { AuthOtp } from './auth-otp';
type AuthOtpConnectorProps = {
  onPress: () => void;
  data: OtpResponse;
};
export const AuthOtpConnector = ({ onPress, data }: AuthOtpConnectorProps) => {
  return <AuthOtp data={data} onPress={onPress} />;
};
