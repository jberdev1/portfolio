'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'
import '@fontsource-variable/fira-code';
import '@fontsource-variable/figtree';

export function Provider(props) {
  const system = createSystem(defaultConfig, {
    theme: {
      tokens: {
        fonts: {
          heading: { value: "figtree  variable" },
          body: { value: "Fira Code variable" },
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
