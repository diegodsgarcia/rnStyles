import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import themeDefault from '../../styles/themes'

import SimpleExample from './Simple'
import ComplexExample from './Complex'

const Tab = createMaterialBottomTabNavigator()

export default function NativeAnimations() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: themeDefault.primary }}>
      <Tab.Screen name="Simple" component={SimpleExample}></Tab.Screen>
      <Tab.Screen name="Complex" component={ComplexExample}></Tab.Screen>
    </Tab.Navigator>
  );
}

