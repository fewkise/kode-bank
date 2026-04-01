import { JSX } from 'react';
import { Image, ImageSourcePropType } from 'react-native';

interface IconProps {
  source?: ImageSourcePropType;
  IconSvg?: JSX.Element;
  size: number;
  color?: string;
}

export const Icon = ({ source, IconSvg, size = 24, color }: IconProps) => {
  if (source) {
    return (
      <Image
        style={{ height: size, width: size }}
        resizeMode="contain"
        source={source}
      />
    );
  }
  if (IconSvg) {
    return <IconSvg color={color} fontSize={size} />;
  }
};
