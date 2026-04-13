import { View } from 'react-native';

import { PrimaryButton } from '@shared/ui/molecules';
import { DummyScreen } from '@shared/ui/templates';
type AuthSuccessProps = {
  onPress: () => void;
};
export const AuthSuccess = ({ onPress }: AuthSuccessProps) => {
  return (
    <DummyScreen>
      <View>
        <PrimaryButton onPress={onPress}>Дальше</PrimaryButton>
      </View>
    </DummyScreen>
  );
};
