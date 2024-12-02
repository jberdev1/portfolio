import { Box, Image, Stack, Card, Separator } from "@chakra-ui/react";
import profile from "./assets/profile.jpg"
import logoUtc from "./assets/logo_utc.png"
import {  useColorModeValue } from './components/ui/color-mode';


export default function Profile(){
    return <Card.Root shadow={"2xl"} flexDirection={{base: "column"}}  maxW={"60%"} justifyContent="space-around" bgColor={useColorModeValue("blue.100", "blue.900")}>
            <Card.Header textAlign="center" >
                <Card.Title>Joris TRIART</Card.Title>
            </Card.Header>

            <Card.Body>
                <Stack direction={{base: "column", md:"row"}}  spaceX={8}>
                    <Box >
                        <Card.Title size={"3xl"}>Ingénieur en développement logiciel/ web</Card.Title>
                        <Card.Description mt={2} size={"3xl"} maxW={"70%"}>Ingénieur diplomé de l&apos;Université de Technologie de Compiègne en génie informatique, filière ingénierie des systèmes informatiques</Card.Description>
                        
                        <Card.Description size={"3xl"} mt={2} maxW={"70%"}>Passionné par le développement et la guitare électrique</Card.Description>
                        <Image mt="10%" mr="0" h="100px"  src={logoUtc}/>
                    </Box>
                    <Separator colorPalette={"green"} size={"lg"} orientation="vertical"/>
                    <Box ml="0" minW="200px">
                        <Image
                            src={profile}
                            boxSize="200px"
                            borderRadius="full"
                            fit="cover"
                            alt="Profile picture"
                        />
                    </Box>
                </Stack>
            </Card.Body>

    </Card.Root>
}