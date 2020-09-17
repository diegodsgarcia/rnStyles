import { transform } from '@babel/core'
import React from 'react'
import { View } from 'react-native'
import { animated, useSpring } from 'react-spring/native'
import { StyledButton } from '../../components/Button'

import ReactSvg from '../../images/react.svg'

const AnimatedView = animated(View)

function Complex() {
  const [props, set] = useSpring(() => ({
    opacity: 0,
    rotate: '0deg',
    scale: 0.2,
  }))

  const onPress = () => {
    set({
      opacity: 1,
      rotate: '360deg',
      scale: 1.5,
    })
  }
  return (
    <>
      <StyledButton onPress={onPress}>Press here!</StyledButton>
      <AnimatedView style={{
        transform: [
          { rotate: props.rotate },
          { scale: props.scale }
        ],
        opacity: props.opacity,
      }}>
        <ReactSvg />
      </AnimatedView>
    </>
  )
}

export default Complex
