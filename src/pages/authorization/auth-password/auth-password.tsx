import { View } from 'react-native';

import { PrimaryButton } from '@shared/ui/molecules';
import { DummyScreen } from '@shared/ui/templates';
type AuthPasswordProps = {
  onPress: () => void;
};
export const AuthPassword = ({ onPress }: AuthPasswordProps) => {
  return (
    <DummyScreen>
      <View>
        <PrimaryButton onPress={onPress}>Дальше</PrimaryButton>
      </View>
    </DummyScreen>
  );
};
