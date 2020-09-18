import React  from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import NativeStylesScreen from './screens/NativeStyles'
import NativeAnimationsScreen from './screens/NativeAnimations'
import SpringAnimationsScreen from './screens/SpringAnimations'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="NativeStyles" component={NativeStylesScreen}></Drawer.Screen>
        <Drawer.Screen name="Native Animations" component={NativeAnimationsScreen}></Drawer.Screen>
        <Drawer.Screen name="Spring Animations" component={SpringAnimationsScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}

