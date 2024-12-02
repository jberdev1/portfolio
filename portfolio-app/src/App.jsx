import './App.css'
import { Provider } from "./components/ui/provider"
import Simple from './Navbar'
import { ColorModeProvider, useColorModeValue } from './components/ui/color-mode'
import {  Box, Center, Heading, VStack } from '@chakra-ui/react'
import Profile from './Profile'
import Background from './background'



function App() {

  return (
    <Provider>
      <ColorModeProvider>
      <VStack p={0} w="100%" h="100%" minH="100vh">
        <Simple/>
        <Heading size="6xl" mb={12}>Portfolio GitHub</Heading>
        <Heading size="2xl" mb={12}>Mon Profil</Heading>

        <Center  w={"100%"} h="100%">
        <Profile/>
        </Center>
        <Heading size="2xl" mt={12} mb={12}>Mes Projets</Heading>
        <Box 
            position={"fixed"}
            zIndex={-1}
            top={"-12%"}
            color={useColorModeValue('red.50', 'red.400')}>
        <Background/>
      </Box>
      </VStack>
      </ColorModeProvider>
    </Provider>
  )
}

export default App
