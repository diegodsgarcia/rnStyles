# POC Styles

### DIFERENÇAS WEB X REACT NATIVE

No react native o Stylesheet trabalha na base de objetos Javascript com propriedades similares do CSS web, tornando assim seu desenvolvimento mobile muito amigável para os desenvolvedores web.

**Exemplo simples de como utilizar o Stylesheet do React Native**

```tsx
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MinhaScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Hello world!
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 32,
    textTransform: 'uppercase',
    color: 'green',
  }
})

export default MinhaScreen
```

**Não existe DOM**

O primeiro principio do React Native é não possuir o mesmo comportamento web. No React Native trabalhamos com componentes visuais nativo tornando assim toda a manipulação clássica que existe na web com a árvore DOM inválido.

**Tudo é display: flex**

Uma das principais diferenças de comportamento de estilos entre web e react é que todos os elementos tem como padrão o fluxo de comportamento de layout do display: flex. Não existe nenhum outro comportamento além do `flex`  e `none`

**Unidade de medidas**

No mundo mobile podemos trabalhar apenas com as unidades de medidas em px e %

**Não existe seletores e efeito cascata**

No React Native cada elemento é único e deve possuir seu próprio estilo, com isso não é possível utilizar selector, pseudo classes / elementos ou sobrescrever o estilo em cascata.

**Não existe shorthand nas propriedades**

Não é possível utilizar as propriedades shortHand como  por exemplo `margin: 20px 10px`, tornando assim um pouco mais verboso a estilização de alguns componentes, porém há propriedades que substituem essa dificuldade como `marginVertical` / `marginHorizontal`

**Não existe a API de @keyframes e @media**

No React Native não existe a árvore DOM, com isso várias APIs nativas como keyframes e media são descartadas

### **Como funciona o layout**

- **Layout Props**

    São todos os componentes do React Native de visualização (View, Text, Image, Modal)

- **View Props**

    São componente especifico de criação de layout (View, ScrollView)

- **Image props**

    Componente de renderização de imagem

- **Shadow Props**

    Props de configuração de sombra nos elementos porém, essas props são só utilizadas no iOS

- **Text Style Props**

    props de configuração de texto e fonte

    Saiba mais sobre todas as props disponíveis neste link: [https://reactnative.dev/docs/layout-props](https://reactnative.dev/docs/layout-props)

### **Fontes**

Para exportar fontes customizadas no React Native utilizando o Expo você pode carregar ela de forma assíncrona em qualquer lugar (tanto server / local).

```jsx
function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return <Text style={{ fontFamily: 'Montserrat' }} />;
}
```

Utilizando apenas o RN você deve adicionar as fontes na pasta `assets/fonts` e utilizar o comando `npx react-native link` . Essas fontes serão carregadas em processo de build

### SVG

Para trabalhar com SVG's devemos instalar o pacote r[eact-native-svg](https://github.com/react-native-community/react-native-svg), porém para trabalharmos com SVG transformando em componentes direto de um arquivo devemos também utilizar o pacote [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer).

Há um projeto a qual centraliza todas as bibliotecas de Icones no React Native chamado r[eact-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

### **Styles Global / Temas**

Como não há efeito cascata em um estilo com RN, para realizarmos estilos globais dependemos total de realizar constante de objetos, como no exemplo a baixo:

```tsx
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
```

### Animações

O React Native nos fornece uma API para trabalhar animações

**Animação de opacity simples:**

Há outras bibliotecas de animações no React Native como [react-spring](https://www.react-spring.io/), porém sua api para o React Native não traz tantas vantagens a fim de substituir a API nativa.

```tsx
import React, { useState, useEffect, useRef } from 'react'
import { Animated, StyleSheet, View, Text } from 'react-native'

const animatedValue = useRef(new Animated.Value(0)).current
const [toggle, setToggle] = useState(false)

  useEffect(() => {
    Animated.timing(
      animatedValue,
      {
        toValue: toggle ? 1 : 0,
        duration: 500,
        useNativeDriver: false
      }
    ).start()
  }, [toggle])

const onPress = () => setToggle(!toggle)

return (
    <>
      <Text onPress={onPress}>
        Press here!
      </Text>
			<Animated.View style={ { ...styles.box, opacity: animatedValue }}/>
		</>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  }
})
```

### Styled components

Com o styled components é possível utilizar a mesma sintaxe web desenvolver as regras visuais do Stylesheet, além de trazer outras vantagens gigantes como props de pra criação de temas.

### Repo de exemplos

[https://github.com/diegodsgarcia/rnStyles](https://github.com/diegodsgarcia/rnStyles)

### Bibliografias

[https://reactnative.dev/docs/layout-props](https://reactnative.dev/docs/layout-props)

[https://docs.expo.io/guides/using-custom-fonts/](https://docs.expo.io/guides/using-custom-fonts/)

[https://github.com/react-native-community/react-native-svg](https://github.com/react-native-community/react-native-svg)
