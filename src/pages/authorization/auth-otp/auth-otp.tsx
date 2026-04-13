import { View } from 'react-native';

import { PrimaryButton } from '@shared/ui/molecules';
import { DummyScreen } from '@shared/ui/templates';
type AuthOtpProps = {
  onPress: () => void;
};
export const AuthOtp = ({ onPress }: AuthOtpProps) => {
  return (
    <DummyScreen>
      <View>
        <PrimaryButton onPress={onPress}>Дальше</PrimaryButton>
      </View>
    </DummyScreen>
  );
};
