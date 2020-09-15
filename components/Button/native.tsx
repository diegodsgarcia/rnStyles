import React from 'react'
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native'
import themeDefault, { Theme } from '../../styles/themes'

type PropTypes = {
  children: React.ReactNode,
  onPress?: ((event: GestureResponderEvent) => void),
}

const NativeButton = ({ children, onPress }: PropTypes ) => (
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
    backgroundColor: themeDefault.primary,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: themeDefault.contrast
  }
})

export default NativeButton
