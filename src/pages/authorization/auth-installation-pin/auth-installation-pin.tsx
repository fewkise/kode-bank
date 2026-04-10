import { View } from 'react-native';

import { PrimaryButton } from '@shared/ui/molecules';
import { DummyScreen } from '@shared/ui/templates';
type AuthInstallationPinProps = {
  onPress: () => void;
};
export const AuthInstallationPin = ({ onPress }: AuthInstallationPinProps) => {
  return (
    <DummyScreen>
      <View>
        <PrimaryButton onPress={onPress}>Дальше</PrimaryButton>
      </View>
    </DummyScreen>
  );
};
