import React, { useState, useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function NativeAnimations() {
  const animatedValue = useRef(new Animated.Value(0)).current
  const spin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })
  const color = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange:['rgb(90,210,244)' , 'rgb(224,82,99)']
  })
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    Animated.timing(
      animatedValue,
      {
        toValue: toggle ? 1 : 0,
        duration: 500,
        useNativeDriver: false
      }
    ).start()
  }, [toggle])

  const onClick = () => {
    setToggle(!toggle)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick} style={styles.button}>
        <Text style={styles.text}>Simple</Text>
      </TouchableOpacity>
      <View style={styles.examples}>
        <Animated.View style={ { ...styles.box, opacity: animatedValue }}/>
        <Animated.View style={ { ...styles.box, transform: [{ rotate: spin }] }}/>
        <Animated.View style={ { ...styles.box, backgroundColor: color }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  examples: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row'
  },
  text: {
    color: '#ffffff'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: '#000000'
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  }
});
