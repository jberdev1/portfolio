'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

export function Provider(props) {
  const system = createSystem(defaultConfig, {
    theme: {
      tokens: {
        fonts: {
          heading: { value: "Fira Code" },
          body: { value: "Fira Code" },
        },
      },
    },
  })
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
