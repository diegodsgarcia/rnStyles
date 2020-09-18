import React from 'react'
import { GestureResponderEvent } from 'react-native'
import styled from 'styled-components/native'

type PropTypes = {
  children: React.ReactNode,
  onPress?: ((event: GestureResponderEvent) => void),
}

const Container = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  align-items: center;
`

const Text = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.contrast};
`

const Button = ({ children, onPress }: PropTypes ) => (
  <Container onPress={onPress}>
    <Text>{children}</Text>
  </Container>
)

export default Button
