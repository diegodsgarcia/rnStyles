import React from 'react'
import styled from 'styled-components/native'

type PropsType = {
  children: React.ReactNode
}

const Container = styled.View`
  margin: 20px;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 1px 1px 1px #000;
`

const StyledCard = ({ children }: PropsType) => (
  <Container>
    {children}
  </Container>
)
export default StyledCard
