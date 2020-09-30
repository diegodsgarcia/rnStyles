import React from 'react'
import { Image, StyleSheet, ImageProps } from 'react-native'

const NativeImage = ({ style, ...props }: ImageProps) => (
  <Image style={[ styles.image, style ]} {...props} />
)

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  }
})

export default NativeImage
