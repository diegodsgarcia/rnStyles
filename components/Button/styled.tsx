import React from 'react'
import { GestureResponderEvent } from 'react-native'
import styled from 'styled-components/native'

import { light, Theme } from '../../styles/themes'

type PropTypes = {
  children: React.ReactNode,
  onPress?: ((event: GestureResponderEvent) => void),
  theme?: Theme
}

const Container = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${(props: { theme: Theme }) => props.theme.primary};
  align-items: center;
`

Container.defaultProps = {
  theme: light,
}

const Text = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${(props: { theme: Theme }) => props.theme.contrast};
`

Text.defaultProps = {
  theme: light,
}

const Button = ({ children, theme, onPress }: PropTypes ) => (
  <Container theme={theme} onPress={onPress}>
    <Text theme={theme}>{children}</Text>
  </Container>
)

export default Button
