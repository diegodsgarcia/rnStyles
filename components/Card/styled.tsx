import React from 'react'
import styled, { css } from 'styled-components/native'
import themeDefault, { Theme } from '../../styles/themes'

type PropsType = {
  children: React.ReactNode,
  theme?: Theme,
}

const Container = styled.View`
  ${({ theme }: { theme: Theme }) => css`
    margin: 20px;
    padding: 15px;
    background-color: ${theme.cardBackground};
    box-shadow: 1px 1px 1px ${theme.shadowColor};
  `}
`

Container.defaultProps = {
  theme: themeDefault
}

const StyledCard = ({ children, theme }: PropsType) => (
  <Container theme={theme}>
    {children}
  </Container>
)
export default StyledCard
