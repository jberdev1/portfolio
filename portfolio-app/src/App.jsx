import './App.css'
import { Provider } from "./components/ui/provider"
import Simple from './Navbar'
import { ColorModeProvider, useColorModeValue } from './components/ui/color-mode'
import {  Box, Center, Heading, Text, VStack } from '@chakra-ui/react'
import Profile from './Profile'
import Background from './background'
import Projects from './Projects'



function App() {

  return (
    <Provider>
      <ColorModeProvider>
      <VStack p={0} w="100%" h="100%" minH="100vh">
        <Simple/>
        <Heading size="6xl" mb={12}>Port
          <Text as={'span'} color={useColorModeValue('orange.400','orange.600')}>
            folio
          </Text></Heading>
        <Heading size="2xl" mb={12} textDecoration={"underline 6px"} textDecorationColor={useColorModeValue('orange.400','orange.600')}>Mon Profil</Heading>

        <Center  w={"100%"} h="100%">
        <Profile/>
        </Center>
        <Heading size="2xl" mt={12} mb={12} textDecoration={"underline 6px"} textDecorationColor={useColorModeValue('orange.400','orange.600')}>Mes Projets</Heading>
        <Box 
            position={"fixed"}
            zIndex={-1}
            top={"-12%"}
            color={useColorModeValue('red.50', 'red.400')}>
        <Background/>
      </Box>
      <Projects/>
      <Text>
      Free SVG Background by <a target="_blank" href="https://bgjar.com">BGJar</a>
      </Text>
      </VStack>
      </ColorModeProvider>
    </Provider>
  )
}

export default App
