import { View } from 'react-native';

import { PrimaryButton } from '@shared/ui/molecules';
import { DummyScreen } from '@shared/ui/templates';
type AuthCreatePinProps = {
  onPress: () => void;
};
export const AuthCreatePin = ({ onPress }: AuthCreatePinProps) => {
  return (
    <DummyScreen>
      <View>
        <PrimaryButton onPress={onPress}>Дальше</PrimaryButton>
      </View>
    </DummyScreen>
  );
};
