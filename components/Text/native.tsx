import React from 'react'
import { Text, StyleSheet, TextStyle } from 'react-native'

type PropTypes = {
  children: React.ReactNode,
  style?: TextStyle,
}

const NativeText = ({ children, style }: PropTypes) => (
  <Text style={{ ...styles.text, ...style }}>{children}</Text>
)

const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
    fontSize: 14,
  }
})

export default NativeText
