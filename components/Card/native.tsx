import React from 'react'
import { View, StyleSheet } from 'react-native'
import themeDefault from '../../styles/theme'

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
    backgroundColor: themeDefault.cardBackground,
    elevation: 1,
    shadowColor: themeDefault.shadowColor,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 1,
  }
})

export default NativeCard
