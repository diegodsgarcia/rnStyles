import React from 'react'
import { View, StyleSheet } from 'react-native'

type BoxType = {
  children: React.ReactNode
}

const Box = ({ children }: BoxType) => {
  <View style={styles.box}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  }
})
