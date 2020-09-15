import styled from 'styled-components/native'
import themeDefault, { Theme } from '../../styles/themes'

const StyledText = styled.Text`
  margin: 10px 0;
  font-size: 14px;
  color: ${({ theme }: { theme: Theme }) => theme.text};
`

StyledText.defaultProps = {
  theme: themeDefault
}

export default StyledText
