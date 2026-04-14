import { useState } from 'react';
import React, {
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import { Icon } from '@shared/ui/atoms';
type Props = AuthInputProps & TextInputProps;
type AuthInputProps = {
  isError: boolean;
  isPassword: boolean;
};

export const AuthInput = ({
  value,
  onChangeText,
  isError,
  isPassword,
  ...rest
}: Props) => {
  const { theme } = useUnistyles();
  const [isVisible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.forIcon}>
        <Icon
          color={
            isError
              ? theme.palette.indicator.error
              : theme.palette.button.primary
          }
          name={isPassword ? 'IconLock1' : 'IconPhone'}
        />
      </View>
      {isPassword ? (
        <TextInput
          style={[styles.root, isError && styles.errorText]}
          value={value}
          secureTextEntry={isVisible}
          keyboardAppearance={theme.name}
          keyboardType="phone-pad"
          {...rest}
          onChangeText={onChangeText}
          placeholderTextColor={
            isError
              ? theme.palette.indicator.error
              : theme.palette.text.tertiary
          }
        />
      ) : (
        <MaskedTextInput
          style={[styles.root, isError && styles.errorText]}
          mask="+7 (999) 999-99-99"
          {...rest}
          keyboardAppearance={theme.name}
          keyboardType="phone-pad"
          value={value}
          onChangeText={(text, rawText) => {
            onChangeText?.(rawText);
          }}
          placeholderTextColor={
            isError
              ? theme.palette.indicator.error
              : theme.palette.text.tertiary
          }
        />
      )}

      {isPassword && (
        <TouchableOpacity
          style={styles.closeContainer}
          hitSlop={8}
          onPress={() => setVisible(prev => !prev)}
        >
          <Icon
            color={theme.palette.text[isVisible ? 'secondary' : 'tertiary']}
            name={isVisible ? 'IconEye' : 'IconEyeOff'}
          />
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
  forIcon: {
    marginLeft: theme.spacing(2),
  },
  container: {
    flexDirection: 'row',
    backgroundColor: theme.palette.content.primary,
    borderRadius: 26,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  closeContainer: {
    paddingHorizontal: theme.spacing(2),
  },
  errorText: {
    color: theme.palette.indicator.error,
  },
}));
