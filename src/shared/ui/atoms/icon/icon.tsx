import { StyleProp, ViewStyle } from 'react-native';

import * as IconsList from '@shared/ui/icons';
import type { TIconVariant } from '@shared/ui/icons/types';
import { useTheme } from '@shared/ui/theme/use-theme';

type Props = {
  name: TIconVariant;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export const Icon = ({ name, color, ...rest }: Props) => {
  const theme = useTheme();

  const Component = IconsList[name];
  if (!Component) {
    return null;
  }

  return <Component {...rest} color={color ?? theme.palette.accent.primary} />;
};
