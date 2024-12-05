import { Box, Image, Stack, Card, Separator, Center, Text, Container } from "@chakra-ui/react";
import profile from "./assets/profile.jpg"
import logoUtc from "./assets/logo_utc.png"
import {  useColorModeValue } from './components/ui/color-mode';
import '@fontsource-variable/figtree';


export default function Profile(){
    return <Card.Root shadow={"2xl"} flexDirection={{base: "column"}}  maxW={"60%"} justifyContent="space-around" bgColor={useColorModeValue("blue.100", "blue.900")}>
            <Card.Header textAlign="center" >
                <Card.Title size="5xl" fontFamily={"figtree"} fontSize={"5xl"}>Joris TRIART</Card.Title>
                <Box ml={{base: "0px"}} minW="200px" display={{base: "block", md:"none"}} mt={8}>
                        <Center>
                            <Image
                                src={profile}
                                boxSize="200px"
                                borderRadius="full"
                                fit="cover"
                                alt="Profile picture"
                            />
                        </Center>
                    </Box>
            </Card.Header>

            <Card.Body>
                <Stack direction={{base: "column", md:"row"}}  spaceX={{base: 0, md: 8}}>
                    <Box >
                        <Card.Title size={"3xl"}>Ingénieur en développement logiciel/<Text color={useColorModeValue('orange.400','orange.600') }as="span">web</Text></Card.Title>
                        <Card.Description mt={2} size={"3xl"} maxW={{md: "70%", base: "100%"}}>Ingénieur diplomé de l&apos;Université de Technologie de Compiègne en génie informatique, filière ingénierie des systèmes informatiques</Card.Description>
                        
                        <Card.Description size={"3xl"} mt={2} maxW={{md: "70%", base: "100%"}}>Passionné par le développement, la vidéo et la guitare électrique</Card.Description>
                        <Center>
                            <Image mt="10%" mr="0" h="100px"  src={logoUtc}/>
                        </Center>
                    </Box>
                    <Separator colorPalette={"green"} size={"lg"} orientation="vertical" />
                    <Box ml={{base: "0px"}} minW="200px" display={{base: "none", md:"block"}}>
                        <Center>
                            <Image
                                src={profile}
                                boxSize="200px"
                                borderRadius="full"
                                fit="cover"
                                alt="Profile picture"
                            />
                        </Center>
                        
                    </Box>
                </Stack>
            </Card.Body>

    </Card.Root>
}