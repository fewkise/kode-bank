import { startHeadersInterceptor } from '@kode-frontend/session-interceptor';
import { ReactNode, useEffect } from 'react';

import { apiAxiosInstance } from '@shared/api';

const getHeaders = () => {
  const currentAccessToken = ''; // TODO: взять accessToken из effector стора

  const headers = [];

  if (currentAccessToken) {
    headers.push({
      key: 'Authorization',
      value: `Bearer ${currentAccessToken}`,
    });
  }

  return [
    ...headers,
    // {
    //   key: 'Prefer',
    //   value: 'code=409',
    // },
  ];
};

type Props = {
  children: ReactNode;
};

export const SessionProvider = ({ children }: Props) => {
  useEffect(() => {
    const { ejectAll } = startHeadersInterceptor({
      getHeaders,
    })([apiAxiosInstance]);

    return () => {
      ejectAll();
    };
  }, []);
  return <>{children}</>;
};
