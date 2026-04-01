import React, {
  TextInput,
  TextInputProps,
  Image,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { IconClose } from '@shared/ui/icons';

interface PhoneInputProps extends TextInputProps {
  photo?: ImageSourcePropType;
  onClear: () => void;
  isError: boolean;
}

export const PhoneInput = ({
  value,
  onClear,
  onChangeText,
  isError,
  photo,
  ...rest
}: PhoneInputProps) => {
  const { theme } = useUnistyles();
  const isClearButtonVisible = value?.length !== 0 && onClear;
  return (
    <View style={styles.container}>
      {photo && <Image style={styles.forImage} source={photo} />}
      <TextInput
        style={[styles.root, isError && styles.errorText]}
        value={value}
        keyboardAppearance="dark"
        keyboardType="phone-pad"
        {...rest}
        onChangeText={onChangeText}
        placeholderTextColor={
          isError ? theme.palette.indicator.error : theme.palette.text.tertiary
        }
      />
      {isClearButtonVisible && (
        <TouchableOpacity
          style={styles.closeContainer}
          hitSlop={8}
          onPress={onClear}
        >
          <IconClose size={24} color={theme.palette.text.tertiary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create(theme => ({
  root: {
    flex: 1,
    paddingVertical: theme.spacing(2),
    paddingHorizontal: theme.spacing(2),
    fontSize: theme.typography.body20.size,
    fontFamily: theme.typography.body20.fontFamily,
    letterSpacing: theme.typography.body20.letterSpacing,
    lineHeight: theme.typography.body20.lineHeight,
    color: theme.palette.text.primary,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: theme.palette.content.primary,
    borderRadius: 26,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  forImage: {
    width: 24,
    height: 24,
    marginLeft: theme.spacing(2),
    resizeMode: 'contain',
  },
  closeContainer: {
    paddingHorizontal: theme.spacing(2),
  },
  errorText: {
    color: theme.palette.indicator.error,
  },
}));
