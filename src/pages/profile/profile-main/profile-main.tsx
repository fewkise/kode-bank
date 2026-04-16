import { View } from 'react-native';

import { PrimaryButton } from '@shared/ui/molecules';

type ProfileMainProps = {
  onPress: () => void;
  isLoading: boolean;
};

export const ProfileMain = ({ onPress, isLoading }: ProfileMainProps) => {
  return (
    <View>
      <PrimaryButton disabled={isLoading} onPress={onPress}>
        Выйти
      </PrimaryButton>
    </View>
  );
};
