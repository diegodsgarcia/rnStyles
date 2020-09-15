export type Theme = {
  primary?: string,
  text?: string,
  background?: string,
  border?: string,
  contrast?: string,
  shadowColor?: string,
  cardBackground?: string,
}

const light: Theme = {
  primary: '#7b1fa2',
  text: '#333333',
  background: '#eeeeee',
  border: '#666666',
  contrast: '#ffffff',
  shadowColor: '#000000',
  cardBackground: '#ffffff'
}

const dark: Theme = {
  primary: '#4a0072',
  text: '#ffffff',
  background: '#000000',
  border: '#666666',
  contrast: '#ffffff',
  shadowColor: '#000000',
  cardBackground: '#333333'
}

export default light
