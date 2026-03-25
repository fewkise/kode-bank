// MARK: - Imports

const fs = require('fs');
const path = require('path');

// MARK: - Constants

/**
 * list of route than not be able to merge and must take from template
 */
const EXCLUDE_SCHEMAS = [];

/**
 * Path to folder with specs
 */
const INPUT_PATH = path.join(__dirname, './input');

/**
 * Path to template with base spec config
 */
const BASE_TEMPLATE_PATH = path.join(__dirname, './templates/base.json');

/**
 * Path to result api spec
 */
const TARGET_PATH = path.join(__dirname, '../../api.json');

// MARK: - Methods

/**
 *
 * @param {string} specFolderPath
 * @param {{ encoding: string, withFileTypes: boolean }} params
 * @returns {fs.Dirent[]}
 */
const getSpecificationFiles = (
  specFolderPath,
  params = {
    encoding: 'utf8',
    withFileTypes: true,
  },
) => {
  return fs.readdirSync(specFolderPath, params).filter(item => item.isFile());
};

/**
 *
 * @returns {Object} base JSON Specification template
 */
const getDocumentForMerge = () => {
  return {
    ...JSON.parse(fs.readFileSync(BASE_TEMPLATE_PATH, { encoding: 'utf8' })),
  };
};

/**
 * func check schema name
 * @param {string} name
 * @returns {boolean} flag for continue
 */
const shouldSkipSchema = name => {
  return name.startsWith('Common') || EXCLUDE_SCHEMAS.includes(name);
};

/**
 * Function get folder path with micro-service specifications, merge it to one specification.
 * And write to target output
 *
 * @param {string} specFolderPath
 */
const mergeSpecifications = specFolderPath => {
  // MARK: - get json files from input folder

  const files = getSpecificationFiles(specFolderPath);

  // MARK: - get new document template for merging

  const document = getDocumentForMerge();

  // MARK: - Loop for run on specs files

  for (let i = 0; i < files.length; i++) {
    const fileObject = files[i];

    // MARK: - Prepare specification in string format for updating refs

    let specification = fs.readFileSync(
      fileObject.path + '/' + fileObject.name,
      {
        encoding: 'utf8',
      },
    );

    // MARK: - Prepare schemas object

    const schemasObject = JSON.parse(specification).components.schemas;

    for (let schemaName of Object.keys(schemasObject)) {
      // MARK: Remove Common schemas from array

      if (shouldSkipSchema(schemaName)) {
        continue;
      }
    }

    // MARK: - prepare path object

    const specificationObject = JSON.parse(specification);

    // MARK: - remove user id from params

    for (const pathName of Object.keys(specificationObject.paths)) {
      const path = specificationObject.paths[pathName];
      for (const endpoint in path) {
        path[endpoint].parameters = path[endpoint].parameters?.filter(
          parameter => {
            return parameter.name !== 'user-id';
          },
        );
      }

      // TODO: убрать, когда заменим bff.json с web версии на mobile версию
      if (pathName.startsWith('/web')) {
        const newPathName = pathName.replace('/web', '');
        specificationObject.paths[newPathName] =
          specificationObject.paths[pathName];
        delete specificationObject.paths[pathName];
      }
    }

    // MARK: - merge prepared schemas and paths to template

    document.paths = { ...specificationObject.paths, ...document.paths };

    document.components.schemas = {
      ...specificationObject.components.schemas,
      ...document.components.schemas,
    };
  }

  // MARK: - rewrite api spec

  fs.writeFileSync(TARGET_PATH, JSON.stringify(document, null, 2));
};

// MARK: - Run main logic

mergeSpecifications(INPUT_PATH);
