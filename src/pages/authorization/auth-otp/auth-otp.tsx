import { View, Text } from 'react-native';

import { OtpResponse } from '@entities/auth/types';
import { PrimaryButton } from '@shared/ui/molecules';
import { DummyScreen } from '@shared/ui/templates';
type AuthOtpProps = {
  onPress: () => void;
  data: OtpResponse;
};
export const AuthOtp = ({ onPress, data }: AuthOtpProps) => {
  return (
    <DummyScreen>
      <View>
        <View>
          <Text>{data.otpCode}</Text>
          <Text>{data.otpId}</Text>
          <Text>{data.otpLen}</Text>
        </View>
        <PrimaryButton onPress={onPress}>Дальше</PrimaryButton>
      </View>
    </DummyScreen>
  );
};
