'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  MenuTrigger,
  Menu,
  Separator,
} from '@chakra-ui/react'
import PropTypes from 'prop-types';
import { RxHamburgerMenu  } from "react-icons/rx";
import { IoMdClose  } from "react-icons/io";
import { ColorModeButton, useColorModeValue } from './components/ui/color-mode';
import { MenuContent, MenuItem } from './components/ui/menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState } from 'react';





const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

NavLink.propTypes = {
    children: PropTypes.node
}



export default function Simple() {
  const { open, onOpen, onClose } = useDisclosure()
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  const projects = [
    {name: "SoundWave", to: "#soundwave"},
    {name: "Chat", to: "#chat"},
    {name: "Carcassonne", to: "#carcassonne"},
    {name: "Last Stand 2242", to: "#laststand"},
    {name: "Site web SSP", to: "#ssp"},

  ]

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={0} w="100%" id="menu">
        <Flex h={16}  alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={open ? onClose : onOpen}
          >{open ? <IoMdClose /> : <RxHamburgerMenu  />}</IconButton>
          <HStack gap={6} width="100%" alignItems={'center'}>
            <Box pl={3}>Portfolio</Box>
            <Separator orientation={"vertical"} height="4"></Separator>

            <HStack as={'nav'} gap={6} display={{ base: 'none', md: 'flex' }}>
                <AnchorLink href={"#profile"}>Mon profil</AnchorLink>
                <Menu.Root>
                  <MenuTrigger>
                    <Button>Mes projets</Button>
                  </MenuTrigger>
                  <MenuContent >
                    {projects.map((val, i) => (
                      <MenuItem key={i} _hover={{bgColor: "gray.200"}}>
                        <AnchorLink value="sw" href={val.to}>{val.name}</AnchorLink>
                      </MenuItem>)
                    )}
                  </MenuContent>
                </Menu.Root>
            </HStack>
          </HStack>
            <ColorModeButton></ColorModeButton>
        </Flex>

        {open ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <AnchorLink href={"#profile"}>Mon profil</AnchorLink>
              <AnchorLink _focus={{bgColor:"black"}} href="#menu" onClick={() => {setSubMenuOpen(!subMenuOpen)}}>Mes projets</AnchorLink>
              {subMenuOpen ? 
              "":""}
              {projects.map((val, i) => (
                        <AnchorLink key={i} value="sw" href={val.to}><Box _hover={{bgColor:"black"}} pl={5}>{val.name}</Box></AnchorLink>
                      )
                    )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}