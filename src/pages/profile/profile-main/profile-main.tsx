import { View } from 'react-native';

import { PrimaryButton } from '@shared/ui/molecules';

type ProfileMainProps = {
  onPress: () => void;
};

export const ProfileMain = ({ onPress }: ProfileMainProps) => {
  return (
    <View>
      <PrimaryButton onPress={onPress}>Выйти</PrimaryButton>
    </View>
  );
};
