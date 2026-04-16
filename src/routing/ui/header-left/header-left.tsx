import { TouchableOpacity } from 'react-native';

import { Typography } from '@shared/ui/atoms';

type HeaderLeftProps = {
  onPress: () => void;
};

export const HeaderLeft = ({ onPress }: HeaderLeftProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Typography variant="body15Regular" color="secondary">
        Пропустить
      </Typography>
    </TouchableOpacity>
  );
};
