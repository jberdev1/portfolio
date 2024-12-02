'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react'
import PropTypes from 'prop-types';
import { RxHamburgerMenu  } from "react-icons/rx";
import { IoMdClose  } from "react-icons/io";
import { ColorModeButton, useColorModeValue } from './components/ui/color-mode';
import { MenuContent, MenuItem, MenuRoot, MenuSeparator } from './components/ui/menu';




const Links = ['Mon Profil', 'Mes Projets']

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

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={0} w="100%">
        <Flex h={16}  alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={open ? onClose : onOpen}
          >{open ? <IoMdClose /> : <RxHamburgerMenu  />}</IconButton>
          <HStack spacing={8} alignItems={'center'}>
            <Box>Portfolio</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <MenuRoot>
              <MenuContent>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuSeparator />
                <MenuItem>Link 3</MenuItem>
              </MenuContent>
            </MenuRoot>
          </Flex>
            <ColorModeButton></ColorModeButton>
        </Flex>

        {open ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => {
                console.log("opened")
                return (
                <NavLink key={link}>{link}</NavLink>
              )})}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}