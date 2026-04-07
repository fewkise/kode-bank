import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';

import { AppNavigation } from '@routing/app-navigation';
import { queryClient } from '@shared/api/query-client';

import { Providers } from './providers';

export const App = () => {
  return (
    <Providers>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <AppNavigation />
        </QueryClientProvider>
      </NavigationContainer>
    </Providers>
  );
};
