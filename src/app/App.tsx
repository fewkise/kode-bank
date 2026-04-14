import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigation } from '@routing/app-navigation';
import { queryClient } from '@shared/api/query-client';

import { SessionProvider } from './providers';

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <AppNavigation />
          </SessionProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
