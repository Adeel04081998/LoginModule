/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import {  NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigations/index";
import { SafeAreaView } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={{ flex: 1, ...StyleSheet.absoluteFillObject }}
    >
      <StatusBar barStyle={false ? 'light-content' : 'dark-content'} />

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </PersistGate>

      </Provider>

    </SafeAreaView>
  );
};



export default App;
