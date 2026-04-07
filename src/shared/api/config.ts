import { Configuration } from './auth-axios-client';

const apiBasePath =
  'https://stoplight.io/mocks/kode-education/kode-bank/27774161';

const authBasePath =
  'https://stoplight.io/mocks/kode-education/kode-bank/27774162';

export const apiAuthConfig = new Configuration({
  basePath: authBasePath,
});

export const apiCoreConfig = new Configuration({
  basePath: apiBasePath,
  accessToken: 'todo',
});
