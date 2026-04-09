import React, {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Image,
} from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { Typography, Icon } from '@shared/ui/atoms';
import { TIconVariant } from '@shared/ui/icons/types';

type Props = ServiceWrapperProps & TouchableOpacityProps;
type ServiceWrapperProps = {
  serviceName: string;
  onPress: (serviceId?: string, title?: string) => void;
  source?: string;
  IconSvg?: TIconVariant;
  iconSize: number;
};
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
            name={IconSvg}
            size={iconSize}
            color={theme.theme.palette.button.primary}
          />
        </View>
      )}
      {!IconSvg &&
        (source ? (
          <Image
            source={{ uri: source }}
            style={{ width: iconSize, height: iconSize }}
          />
        ) : (
          <View
            style={[
              styles.placeholder,
              { width: iconSize, height: iconSize, borderRadius: iconSize / 2 },
            ]}
          >
            <Typography>{serviceName.charAt(0).toUpperCase()}</Typography>
          </View>
        ))}

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
    paddingVertical: theme.spacing(2),
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
  placeholder: {
    backgroundColor: theme.palette.content.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
