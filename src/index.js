import React from 'react';
import { GalioProvider } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import AnimatedAppLoader from './components/AnimatedAppLoader';
import Home from './screens/Home';
import List from './screens/News';
import Login from './screens/Login';
import store from './store';
import theme from './constants/colors';
import { Logo } from './components/Logo';

import pokeNewsLogo from './ressources/logo/pokenews-logo.png';
import pokeNewsSplash from './ressources/splash.png';

enableScreens();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <AnimatedAppLoader image={pokeNewsSplash}>
        <GalioProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#3367B0',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerTitle: (props) => (
                  <Logo width={200} height={50} sourceImage={pokeNewsLogo} {...props} />
                ),
              }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen
                name="News"
                component={List}
                options={({ route }) => ({ title: route.params.name })}
              />
              <Stack.Screen
                name="Article"
                component={List}
                options={({ route }) => ({ title: route.params.name })}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={({ route }) => ({ title: route.params.name })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GalioProvider>
      </AnimatedAppLoader>
    </Provider>
  );
}
