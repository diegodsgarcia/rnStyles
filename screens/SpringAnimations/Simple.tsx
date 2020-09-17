import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { animated, useSpring } from 'react-spring/native'

import  ReactSvg from '../../images/react.svg'
import { StyledButton } from '../../components/Button'

const AnimatedView = animated(View)

function Simple() {
  const [toggle, setToggle] = useState(false)
  const [props, set] = useSpring(() => ({
    opacity: 0,
    rotate: '0deg',
    backgroundColor: 'red',
  }))

  useEffect(() => {
    set({
      opacity: toggle ? 1 : 0,
      rotate: toggle ? '360deg' : '0deg',
      backgroundColor: toggle ? 'blue' : 'red',
    })
  }, [toggle])

  const onPress = () => setToggle(!toggle)

  return (
    <>
      <StyledButton onPress={onPress}>Press here!</StyledButton>
      <View style={styles.container}>
        <View style={styles.examples}>
            <AnimatedView style={ { ...styles.box, opacity: props.opacity }}/>
            <AnimatedView style={ { ...styles.box, transform: [ { rotate: props.rotate }] }} />
            <AnimatedView style={ { ...styles.box, backgroundColor: props.backgroundColor }} />
        </View>
        <AnimatedView style={{ transform: [ { rotate: props.rotate }] }}>
          <ReactSvg width={250} height={250} />
        </AnimatedView>
      </View>
    </>
  )
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
