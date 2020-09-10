import React  from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts } from 'expo-font'

import NativeStyles from './pages/NativeStyles'
import NativeAnimations from './pages/NativeAnimations'
import SpringAnimations from './pages/SpringAnimations'

const Tab = createBottomTabNavigator()

export default function App(props: any) {
  const [loaded] = useFonts({
    LongCang: require('./assets/fonts/LongCang-Regular.otf')
  })

  if (!loaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="NativeStyles" component={NativeStyles} />
        <Tab.Screen name="Native Animations" component={NativeAnimations} />
        <Tab.Screen name="Spring Animations" component={SpringAnimations} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

