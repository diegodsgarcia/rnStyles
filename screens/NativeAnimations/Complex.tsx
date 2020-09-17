import React, { useRef, useState, useEffect } from 'react'
import { Animated } from 'react-native'
import { StyledButton } from '../../components/Button'

import ReactSvg from '../../images/react.svg'

function Complex() {
  const [finished, setFinish] = useState(true)
  const animated1 = useRef(new Animated.Value(0)).current
  const animated2 = useRef(new Animated.Value(0)).current
  const animated3 = useRef(new Animated.Value(0)).current
  const animated4 = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (finished) {
      animated1.setValue(0)
      animated2.setValue(0)
      animated3.setValue(0)
      animated4.setValue(0)
    }
  }, [finished])

  const rotate = animated2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  const scale = animated3.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 1.5]
  })

  const y = animated4.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -40]
  })

  const onPress = () => {
    if (finished) {
      setFinish(false)
      Animated.sequence([
        Animated.timing(animated1, { toValue: 1, duration: 200, useNativeDriver: false  }),
        Animated.parallel([
          Animated.timing(animated2, { toValue: 1, duration: 1000, useNativeDriver: false }),
          Animated.timing(animated3, { toValue: 1, duration: 1000, useNativeDriver: false }),
        ]),
        Animated.delay(1000),
        Animated.parallel([
          Animated.timing(animated1, { toValue: 0, duration: 1100, useNativeDriver: false }),
          Animated.timing(animated2, { toValue: 0, duration: 1000, useNativeDriver: false }),
          Animated.timing(animated3, { toValue: 0, duration: 1000, useNativeDriver: false }),
        ]),
      ]).start(({ finished }) => {
        if (finished) setFinish(true)
      })
    }
  }

  return (
    <>
      <StyledButton onPress={onPress}>Press here!</StyledButton>
      <Animated.View style={
        {
          opacity: animated1,
          transform: [
            { rotate },
            { scale },
            { translateY: y}
          ]
        }
      }>
        <ReactSvg />
      </Animated.View>
    </>
  )
}

export default Complex
