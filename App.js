import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import Register from './src/screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          title: 'ShopOver',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            color: 'blue'
          }
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={ Login } />
        <Stack.Screen name='ForgotPassword' component={ ForgotPassword } />
        <Stack.Screen name='Register' component={ Register } />
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
