import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import styled from 'styled-components/native'

const Box = styled.View`
  width: 100px;
  height: 100px;
  background-color: blue;
  box-shadow: 1px 1px 1px #000;
`

export default function NativeStyles() {
  return (
  <View style={styles.container}>
    <View style={styles.box} />
    <Text style={styles.text}>Font Family Test</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    elevation: 5,
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 32,
    fontFamily: 'LongCang'
  }
})


