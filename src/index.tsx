/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inspection from './inspection';
import Canvas from './canvas';
import ReportDamage from './report-damage';
import Camera from './camera';

const Stack = createStackNavigator();

export default function App() {
  function DamageNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ReportDamage"
          component={ReportDamage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Canvas"
          component={Canvas}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Inspection}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Damage"
          component={DamageNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Canvas"
          component={Canvas}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
