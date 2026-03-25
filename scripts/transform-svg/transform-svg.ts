import { transform, Config, State } from '@svgr/core';
import fs from 'fs';
import path from 'path';
import { format, Options } from 'prettier';

import { IconTemplate } from './icon-template';

const PRETTIER_CONFIG: Options = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  parser: 'babel',
};

const SVGR_ICON_OPTIONS: Config = {
  typescript: true,
  prettier: true,
  prettierConfig: PRETTIER_CONFIG,
  svgoConfig: {},
  native: true,
  expandProps: false,
  template: IconTemplate,
};

type IconFile = {
  data: string;
  filename: string;
};

const INPUT_PATH = path.join(__dirname, 'input');
const OUTPUT_PATH = path.join(__dirname, '../../src/shared/ui/icons');
const ICON_INDEX_PATH = path.join(
  __dirname,
  '../../src/shared/ui/icons/index.ts',
);
const ICON_TYPES_TEMPLATE = path.join(__dirname, './types.ts');
const ICON_TYPES_PATH = path.join(
  __dirname,
  '../../src/shared/ui/icons/types.ts',
);

const findMainColorInIcon = (data: string, searchColor?: string) => {
  const fillRegex = /fill="(?!none|white|#fff|#fffff)(.*?)"/gim;
  const strokeRegex = /stroke="(?!none|white|#fff|#fffff)(.*?)"/gim;

  const fillMatches = [...data.matchAll(fillRegex)];
  if (fillMatches.length !== 0 && fillMatches[0]?.[1]) {
    if (!searchColor) {
      return fillMatches[0][1];
    }
    const mainColor =
      fillMatches.find(item => item[1] === searchColor)?.[1] ??
      fillMatches[0][1];
    return mainColor;
  }

  const strokeMatches = [...data.matchAll(strokeRegex)];
  if (strokeMatches.length !== 0 && strokeMatches[0]?.[1]) {
    if (!searchColor) {
      return strokeMatches[0][1];
    }
    const mainColor =
      strokeMatches.find(item => item[1] === searchColor)?.[1] ??
      strokeMatches[0][1];
    return mainColor;
  }

  return null;
};

const getAllIconPathsInDirectory = (iconPath: string) => {
  const dirContent = fs.readdirSync(iconPath, { withFileTypes: true });

  const allSVGFiles: string[] = dirContent.reduce<string[]>((acc, item) => {
    const itemPath = path.resolve(iconPath, item.name);

    if (item.isDirectory()) {
      return [...acc, ...getAllIconPathsInDirectory(itemPath)];
    }

    if (item.name.includes('.svg')) {
      return [...acc, itemPath];
    }

    return acc;
  }, []);

  return allSVGFiles;
};

const transformIcons = () => {
  if (!fs.existsSync(INPUT_PATH)) {
    fs.mkdirSync(INPUT_PATH);
    console.log(
      '\x1b[33m%s\x1b[0m',
      '⚠️  Input folder was not defined. Add icons and try again',
    );
    return;
  }

  const dirFiles = getAllIconPathsInDirectory(INPUT_PATH);

  if (dirFiles.length === 0) {
    console.log('\x1b[33m%s\x1b[0m', '⚠️  Input folder is empty');
    return;
  }

  const iconFiles: IconFile[] = dirFiles.map(file => {
    const loadedFile = fs.readFileSync(file, { encoding: 'utf8' });
    const filename = path.basename(file, '.svg');
    return {
      data: loadedFile,
      filename,
    };
  });

  // Create output folder
  if (!fs.existsSync(OUTPUT_PATH)) {
    fs.mkdirSync(OUTPUT_PATH);
  }

  // Create types in output folder
  if (!fs.existsSync(ICON_TYPES_PATH)) {
    fs.copyFileSync(ICON_TYPES_TEMPLATE, ICON_TYPES_PATH);
  }

  // Create index file for all icons
  if (!fs.existsSync(ICON_INDEX_PATH)) {
    fs.writeFileSync(ICON_INDEX_PATH, '', { encoding: 'utf-8' });
  }

  iconFiles.forEach(file => {
    const iconName = file.filename.replace(/^\w|-.|_.|\s.|[A-Z]/g, x => {
      return x.length === 1 ? x.toUpperCase() : x[1].toUpperCase();
    });

    const defaultColor = findMainColorInIcon(file.data, '#191919') ?? '#191919';
    const iconTemplateData: State = {
      componentName: iconName,
    };
    const icon = transform.sync(file.data, SVGR_ICON_OPTIONS, iconTemplateData);

    // Remove all fillOpacity from SVG
    let newIcon = icon.replace(/fillOpacity={.+}/gm, '');
    // Set default height and width inside icon
    newIcon = newIcon.replace(/width=\{(.*?)\}/, 'width={width ?? size}');
    newIcon = newIcon.replace(/height=\{(.*?)\}/, 'height={height ?? size}');

    // Replace default color
    const colorRegex = new RegExp(`"${defaultColor}"`, 'g');
    newIcon = newIcon.replace(
      colorRegex,
      '{color}',
    );
    newIcon = newIcon.replace('DEFAULT_COLOR', `"${defaultColor}"`);

    // Remove XMLNS attribute
    newIcon = newIcon.replace(/xmlns="(.*?)"/gm, '');

    // Add spread for other props
    newIcon = newIcon.replace(/(?<=<Svg.+)>/, '{...rest} >');

    // Set new icon name in kebab-case
    const formattedIcon = format(newIcon, PRETTIER_CONFIG);

    const fileName = file.filename[0].toLowerCase() + file.filename.slice(1);

    const formattedFileName = fileName
      .replace(/_|\s/g, '-')
      .replace(/-[A-Z]|[A-Z]/g, x => `-${x.slice(-1).toLowerCase()}`)
      .toLowerCase();

    fs.writeFileSync(OUTPUT_PATH + `/${formattedFileName}.tsx`, formattedIcon, {
      encoding: 'utf8',
    });

    const indexContent = fs.readFileSync(ICON_INDEX_PATH, {
      encoding: 'utf-8',
    });
    const indexIconExport = `export { ${iconName} } from './${formattedFileName}';\n`;

    // Add export line, if it's not present
    if (!indexContent.includes(indexIconExport)) {
      fs.writeFileSync(ICON_INDEX_PATH, indexContent + indexIconExport, {
        encoding: 'utf-8',
      });
    }
  });

  console.log('\x1b[32m%s\x1b[0m', '✅  Succefuly added .tsx icons!');
};

// Run script!
transformIcons();
