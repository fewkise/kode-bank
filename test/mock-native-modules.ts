import { NativeModules as RNNativeModules } from 'react-native';

RNNativeModules.AppBridge = {
  getConstants: () => ({
    baseUrl: 'BASE_URL',
    appScheme: 'APP_SCHEME',
  }),
};

export {};
