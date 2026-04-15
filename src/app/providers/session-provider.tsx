import { startHeadersInterceptor } from '@kode-frontend/session-interceptor';
import { ReactNode, useEffect } from 'react';

import { $authStore } from '@features/auth/model/auth';
import { apiAxiosInstance } from '@shared/api';

const getHeaders = () => {
  const { accessToken } = $authStore.getState();
  const currentAccessToken = accessToken;

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
