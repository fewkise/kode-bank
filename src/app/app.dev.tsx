import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import { App } from './App';
import { Storybook } from '../../.rnstorybook';

export const Root = () => {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (showApp) {
    return <App />;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.root}>
        <BottomSheetModalProvider>
          <SafeAreaView style={styles.root}>
            <Storybook />
            <Button
              onPress={() => setShowApp(true)}
              title="Перейти к приложению"
            />
          </SafeAreaView>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
