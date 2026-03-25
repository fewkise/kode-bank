import { NavigationContainer } from '@react-navigation/native';

import { AppNavigation } from '@routing/app-navigation';

import { Providers } from './providers';

export const App = () => {
  return (
    <Providers>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Providers>
  );
};
