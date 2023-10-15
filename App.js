import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WrapperScreen from './Home/WrapperScreen';
import {Voximplant} from 'react-native-voximplant';

const Stack = createStackNavigator();

const App = () => {
  const voximplant = Voximplant.getInstance();
  return (
    <>
    <StatusBar />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="wrapper"
          component={WrapperScreen}
          options={{headerShown: false}}
        />

       
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
