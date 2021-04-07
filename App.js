import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './src/Pages/Home/index.js';
import GenderPage from './src/Pages/GenderPage';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="GenderPage" component={GenderPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const style = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
  },
});
