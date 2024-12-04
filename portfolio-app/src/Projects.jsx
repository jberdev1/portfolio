import { Box, Card, Center, Container, Flex, Heading, HStack, Image, Separator, Stack, VStack } from "@chakra-ui/react"
import s1 from "./assets/projects/soundwave/soundwave.png"
import s2 from "./assets/projects/soundwave/soundwave2.png"
import s3 from "./assets/projects/soundwave/SoundWave3.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";
import { FaArrowRightLong } from "react-icons/fa6";
import javaLogo from "./assets/logos/java.png"
import intelliLogo from "./assets/logos/intellij.png"


export default function Projects(){
    const soundWaveCards = [s1,s2,s3]

    return <>
    <VStack w={"100%"} minH={{base: "auto", md: "100vh"}} bgRepeat={"no-repeat"} bgColor={"purple.900"}>
        <Heading size={"4xl"} color={"white"} mt={8}>
            SoundWave
        </Heading>
        <Stack mt={8} minH={"70%"} flexDirection={{base: "column", md:"row"}}>
            <Card.Root border={"none"} bgColor={"transparent"}  bgSize={"cover"} w={{base: "100%", md:"70%"}} maxW={{base: "100%", md:"70%"}}>
                <Card.Header width="80%" filter="auto" backdropBlur="sm"  >
                    <HStack  bgColor={"#641ba3"}>
                        <FaArrowRightLong color="white"/>
                        <Card.Title as="span" color={"white"}>
                            Application de partage de musique
                        </Card.Title>
                    </HStack>
                    
                </Card.Header>
                <Card.Body>
                    <Container maxW="2xl" bgColor={"#641ba3"} mt={4} >
                        <Card.Title color={"white"} >Contexte</Card.Title>
                        <Card.Description  color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            {`  Projet dans une équipe d'une dizaine de personnes réalisé à l'UTC, cette application devait permettre aux utilisateurs d'uploader de la musique, partager à des groupes d'utilisateur, noter, commenter des musiques, et d'écouter de la musique`}
                        </Card.Description>
                    </Container>
                    <Container  maxW="2xl" bgColor={"#641ba3"} my={4} pt={2}>
                        <Card.Title color={"white"} >Tâches réalisées</Card.Title>
                        <Box as="ul" fontSize={"sm"} ml={8} listStyleType="circle" color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            <li>Développement côté frontend avec JavaFX, création de l&apos;architecture du frontend</li>
                            <li>Création de maquettes</li>
                            <li>Veille technologique</li>
                            <li>Rédaction de documents de qualité et de spécifications techniques</li>

                        </Box>
                    </Container>
                    <Container  maxW="2xl" bgColor={"#641ba3"} pt={2} >
                        <Card.Title color={"white"} >Technologies et Outils</Card.Title>
                        <Card.Description  color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            <Flex  bgColor={"#641ba3"} justify="space-between">
                                <Card.Title fontSize={"sm"} color={"white"}>
                                    {`  Java, JavaFX, IntelliJ`}
                                </Card.Title>
                                <HStack>
                                    <Image boxSize={"50px"} bgColor={"white"} src={javaLogo}></Image>
                                    <Image boxSize={"50px"} src={intelliLogo}></Image>
                                </HStack>
                            </Flex>
                        </Card.Description>
                    </Container>
                </Card.Body>
            </Card.Root>
            <Center ml={4}>
                <Carousel cards={soundWaveCards}/>
            </Center>
        </Stack>
    </VStack>
</>
}