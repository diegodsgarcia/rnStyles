import React from 'react'
import { View, StyleSheet } from 'react-native'

type PropsType = {
  children: React.ReactNode
}

const NativeCard = ({ children }: PropsType) => (
  <View style={styles.container}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 1,
  }
})

export default NativeCard
