import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { Theme, TypographyVariants } from '@shared/ui/theme/types';

const defaultVariant: TypographyVariants = 'body20';

type TTypographyProps = TextProps & {
  variant?: TypographyVariants;
  color?: keyof Theme['palette']['text'];
  style?: StyleProp<TextStyle>;
  textAlign?: TextStyle['textAlign'];
};

type TTypographyStyleProps = Pick<
  TTypographyProps,
  'variant' | 'textAlign' | 'color'
>;

export const Typography = (props: TTypographyProps) => {
  const { variant, textAlign, color } = props;

  return (
    <Text
      {...props}
      style={styles.typography({
        variant,
        textAlign,
        color,
      })}
    />
  );
};

const styles = StyleSheet.create(theme => {
  return {
    typography: ({
      variant = defaultVariant,
      textAlign = 'auto',
      color = 'primary',
    }: TTypographyStyleProps) => {
      return {
        fontFamily: theme.typography[variant].fontFamily,
        fontSize: theme.typography[variant].size,
        lineHeight: theme.typography[variant].lineHeight,
        letterSpacing: theme.typography[variant].letterSpacing,
        textAlign,
        color: theme.palette.text[color],
      };
    },
  };
});
