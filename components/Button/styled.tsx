import React from 'react'
import { GestureResponderEvent } from 'react-native'
import styled from 'styled-components/native'

import themeDefault, { Theme } from '../../styles/themes'

type PropTypes = {
  children: React.ReactNode,
  onPress?: ((event: GestureResponderEvent) => void),
  theme?: Theme
}

const Container = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${({ theme }: { theme: Theme }) => theme.primary};
  align-items: center;
`

Container.defaultProps = {
  theme: themeDefault,
}

const Text = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }: { theme: Theme }) => theme.contrast};
`

Text.defaultProps = {
  theme: themeDefault,
}

const Button = ({ children, theme, onPress }: PropTypes ) => (
  <Container theme={theme} onPress={onPress}>
    <Text theme={theme}>{children}</Text>
  </Container>
)

export default Button
