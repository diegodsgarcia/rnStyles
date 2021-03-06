import React, { useState, useEffect, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { StyledButton } from '../../components/Button'
import  ReactSvg from '../../images/react.svg'

function Simple() {
  const animatedValue = useRef(new Animated.Value(0)).current
  const spin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })
  const color = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange:['blue' , 'red']
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

  const onPress = () => setToggle(!toggle)

  return (
    <>
      <StyledButton onPress={onPress}>
        Press here!
      </StyledButton>
      <View style={styles.container}>
        <View style={styles.examples}>
          <Animated.View style={ { ...styles.box, opacity: animatedValue }}/>
          <Animated.View style={ { ...styles.box, transform: [{ rotate: spin }] }}/>
          <Animated.View style={ { ...styles.box, backgroundColor: color }}/>
        </View>
        <Animated.View style={ { transform: [{ rotate: spin }] }}>
          <ReactSvg width={250} height={250} />
        </Animated.View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  examples: {
    width: '100%',
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  }
})

export default Simple
