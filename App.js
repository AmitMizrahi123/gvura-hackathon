// Import Packages
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';

// Import Screens
import LoginScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';
import apiKeys from './config/key';

const Stack = createStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys);
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});