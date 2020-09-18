import React from 'react'
import { TextStyle } from 'react-native'
import styled from 'styled-components/native'

type PropsType = {
  children: React.ReactNode
  style?: TextStyle
}

const Text = styled.Text`
  margin: 10px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`

const StyledText = ({ children, style }: PropsType) => (
  <Text style={style}>{children}</Text>
)

export default StyledText
