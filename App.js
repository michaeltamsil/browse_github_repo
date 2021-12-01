/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CommitLists from './src/Components/Pages/CommitLists';
import Login from "./src/Components/Pages/Login";
import SearchGithub from './src/Components/Pages/SearchGithub';


const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login dengan Github">
        <Stack.Screen name="Login dengan Github" component={Login} />
        <Stack.Screen name="Pencarian Github" component={SearchGithub} />
        <Stack.Screen name="Daftar Commit" component={CommitLists} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
