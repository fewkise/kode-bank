import React, {
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { Typography, Icon } from '@shared/ui/atoms';

type Props = ServiceWrapperProps;
interface ServiceWrapperProps extends TouchableOpacityProps {
  serviceName: string;
  onPress: () => void;
  source?: ImageSourcePropType;
  IconSvg?: any | SvgProps;
  iconSize: number;
}
export const ServiceWrapper = ({
  serviceName,
  IconSvg,
  source,
  onPress,
  iconSize,
  ...rest
}: Props) => {
  const theme = useUnistyles();
  return (
    <TouchableOpacity style={styles.serviceWrapper} {...rest} onPress={onPress}>
      {IconSvg && (
        <View style={styles.fon}>
          <Icon
            IconSvg={IconSvg}
            source={source}
            size={iconSize}
            color={theme.theme.palette.button.primary}
          />
        </View>
      )}
      {source && (
        <Icon
          IconSvg={IconSvg}
          source={source}
          size={iconSize}
          color={theme.theme.palette.button.primary}
        />
      )}

      <Typography>{serviceName}</Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(theme => ({
  serviceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(2),
    backgroundColor: theme.palette.background.secondary,
    paddingVertical: theme.spacing(3),
    paddingHorizontal: theme.spacing(2),
  },
  fon: {
    backgroundColor: theme.palette.content.secondary,
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
