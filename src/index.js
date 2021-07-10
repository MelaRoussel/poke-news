import AnimatedAppLoader from './components/AnimatedAppLoader';
import Home from './screens/Home';
import List from './screens/Article';
import React from 'react';
import pokeNewsSplash from './ressources/splash.png';
import store from './store';
import theme from './constants/theme';
import { GalioProvider } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <AnimatedAppLoader image={pokeNewsSplash}>
        <GalioProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} options={{ title: 'My home' }} />
              <Stack.Screen
                name="List"
                component={List}
                options={({ route }) => ({ title: route.params.name })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GalioProvider>
      </AnimatedAppLoader>
    </Provider>
  );
}
