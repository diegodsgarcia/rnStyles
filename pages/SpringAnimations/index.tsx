import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { animated, useSpring } from 'react-spring/native'

const AnimatedView = animated(View)

const SpringAnimations = () => {
  const [toggle, setToggle] = useState(false)
  const [props, set] = useSpring(() => ({
    opacity: 0,
    rotateX: '0deg',
  }))

  useEffect(() => {
    set({
      opacity: toggle ? 1 : 0,
      rotateX: toggle ? '360deg' : '0deg',
    })
  }, [toggle])

  const onPress = () => setToggle(!toggle)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>test</Text>
      </TouchableOpacity>
      <AnimatedView style={{ ...styles.box, ...props, transform: [ { rotate: props.rotateX }] }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: 40
  },
  text: {
    color: '#ffffff'
  },
  box: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 100,
    backgroundColor: '#ff0000',
  }
})

export default SpringAnimations
