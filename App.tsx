import React  from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import NativeStylesScreen from './screens/NativeStyles'
import NativeAnimationsScreen from './screens/NativeAnimations'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="NativeStyles" component={NativeStylesScreen}></Drawer.Screen>
          <Drawer.Screen name="Native Animations" component={NativeAnimationsScreen}></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

