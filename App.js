import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from './src/Pages/Home/index.js';
import Gender from './src/Pages/Gender';
import FormData from './src/Pages/FormData';
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0e5090',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'right',
            },
          }}>
          <Stack.Screen
            name="Form"
            component={FormData}
            options={{title: 'Tus Datos'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

/*     <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Gender"
            component={Gender}
            options={{title: 'Tu Género'}}
          />

*/