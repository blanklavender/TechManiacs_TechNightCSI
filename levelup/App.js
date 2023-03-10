/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/Start';
import Login from './screens/Login';
import Register from './screens/Register';
import PersonalInfo from './screens/PersonalInfo';
import Home from './screens/Home';
import Activity from './screens/Activity';
import Running from './screens/Running';
import Walking from './screens/Walking';
import Cycling from './screens/Cycling';
import Work from './screens/Work';
import Signin from './screens/Signin';
// import Meal from './screens/Meal';
import AuthMiddleware from './screens/AuthMiddleware';

import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="AuthMiddleware"
          component={AuthMiddleware}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Activity"
          component={Activity}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Running"
          component={Running}
          options={{ headerShown: false }} />
        {/* <Stack.Screen
          name="Meal"
          component={Meal}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="Walking"
          component={Walking}
          options={{ headerShown: false }} />


        <Stack.Screen
          name="Work"
          component={Work}
          options={{ headerShown: false }} />


        <Stack.Screen
          name="Cycling"
          component={Cycling}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


