import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import theme from '../../styles/theme'

import { NativeCard, StyledCard } from '../../components/Card'
import { NativeText, StyledText } from '../../components/Text'
import { StyledButton }  from '../../components/Button'

function NativeStyles() {
  return (
  <ScrollView style={styles.container}>
    <NativeCard>
      <NativeText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos accusamus doloremque sunt nulla? Alias eius repellat voluptates nihil
      </NativeText>
      <NativeText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos accusamus doloremque sunt nulla? Alias eius repellat voluptates nihil
      </NativeText>
      <NativeText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos accusamus doloremque sunt nulla? Alias eius repellat voluptates nihil
      </NativeText>
      <NativeText style={styles.text}>Font Family Test</NativeText>
    </NativeCard>
    <StyledCard>
      <StyledText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos accusamus doloremque sunt nulla? Alias eius repellat voluptates nihil
      </StyledText>
      <StyledText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos accusamus doloremque sunt nulla? Alias eius repellat voluptates nihil
      </StyledText>
      <StyledText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos accusamus doloremque sunt nulla? Alias eius repellat voluptates nihil
      </StyledText>
      <StyledText style={styles.text}>Font Family Test</StyledText>
    </StyledCard>
    <StyledButton>Test 123</StyledButton>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  text: {
    marginVertical: 20,
    fontSize: 32,
    fontFamily: 'LongCang-Regular'
  }
})

export default NativeStyles


