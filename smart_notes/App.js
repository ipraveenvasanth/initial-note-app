import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./components/Home";
import Login from "./components/Login";

const Stack = createNativeStackNavigator();

const  App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#aaf'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}>
      <Stack.Screen name="Home" component={Home} options={{title:'Welcome'}}/>
      <Stack.Screen name="Save" component={Login} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default App;