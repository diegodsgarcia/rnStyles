import React from 'react'
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native'
import { light, Theme } from '../../styles/themes'

type PropTypes = {
  children: React.ReactNode,
  onPress?: ((event: GestureResponderEvent) => void),
  theme?: Theme,
}

const NativeButton = ({ children, theme = light, onPress }: PropTypes ) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: light.primary,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff'
  }
})

export default NativeButton
