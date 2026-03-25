import { Config } from '@svgr/core';

export const IconTemplate: Config['template'] = (
  { imports, componentName, jsx },
  { tpl },
) => {
  return tpl`
    ${imports?.[1] ?? ''}

    import { TBaseIconProps } from './types';
    import { autoScale } from '../theme';

    export const ${componentName} = ({ size = autoScale(24), color, width, height, ...rest }: TBaseIconProps) => {
      return(${jsx});
    };
  `;
};
