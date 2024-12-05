import { Box, Card, Center, Container, Flex, Heading, HStack, Image, Separator, Stack, VStack } from "@chakra-ui/react"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";
import { FaArrowRightLong } from "react-icons/fa6";
import javaLogo from "./assets/logos/java.png"
import intelliLogo from "./assets/logos/intellij.png"
import cpluslogo from "./assets/logos/c++.png"
import qtLogo from "./assets/logos/Qt.png"
import bootLogo from "./assets/logos/bootstrap.png"
import reactLogo from "./assets/logos/react.png"
import springLogo from "./assets/logos/spring.jpg"
import androidLogo from "./assets/logos/android-studio.png"
import cssLogo from "./assets/logos/css.png"
import htmlLogo from "./assets/logos/html.png"
import phpLogo from "./assets/logos/php.png"


import { soundWaveCards, chatCards, carcassonneCards, lastSTandCards, sspCards } from "./cards";

export default function Projects(){


    return <Flex direction={"column"} w="100%">
    <VStack id="soundwave" w={"100%"} minH={{base: "auto", md: "100vh"}} bgRepeat={"no-repeat"} bgColor={"purple.900"}>
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
                            <li>Aide technique et formation d&apos;autres étudiants au Java</li>
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



    <VStack id="chat" w={"100%"} minH={{base: "auto", md: "100vh"}} bgRepeat={"no-repeat"} bgColor={"blue.800"}>
        <Heading size={"4xl"} color={"white"} mt={8}>
            Application de chat
        </Heading>
        <Stack mt={8} minH={"70%"} flexDirection={{base: "column", md:"row"}}>
            <Center ml={4}>
                <Carousel cards={chatCards}/>
            </Center>
            <Card.Root border={"none"} bgColor={"transparent"}  bgSize={"cover"} w={{base: "100%", md:"70%"}} maxW={{base: "100%", md:"70%"}}>
                <Card.Header width="80%" filter="auto" backdropBlur="sm"  >
                    <HStack  bgColor={"blue.700"}>
                        <FaArrowRightLong color="white"/>
                        <Card.Title as="span" color={"white"}>
                            Application de chat en réseau local
                        </Card.Title>
                    </HStack>
                    
                </Card.Header>
                <Card.Body>
                    <Container maxW="2xl" bgColor={"blue.700"} mt={4} >
                        <Card.Title color={"white"} >Contexte</Card.Title>
                        <Card.Description  color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            {`  Projet réalisé avec un autre étudiant sur la création d'une application web de messagerie en réseau local, chaque utilisateur peut créer des salons de discussion ouverts pendant une durée limitée et inviter d'autres utilisateurs. Les messages sont actualisés en temps réel par l'application. L'application comporte également une interface admin pour gérer la base de données.`}
                        </Card.Description>
                    </Container>
                    <Container  maxW="2xl" bgColor={"blue.700"} my={4} pt={2}>
                        <Card.Title color={"white"} >Tâches réalisées</Card.Title>
                        <Box as="ul" fontSize={"sm"} ml={8} listStyleType="circle" color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            <li>Maquettisation du frontend avec Bootstrap</li>
                            <li>Création du frontend, des différentes pages et des formulaires avec ReactJS</li>
                            <li>Création des requêtes côté front, mise en place de la connection par websockets, gestion des authentification côté frontend</li>
                            <li>Création d&apos;une partie de l&apos;interface admin</li>
                        </Box>
                    </Container>
                    <Container  maxW="2xl" bgColor={"blue.700"} pt={2} >
                        <Card.Title color={"white"} >Technologies et Outils</Card.Title>
                        <Card.Description  color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            <Flex  justify="space-between">
                                <Card.Title fontSize={"sm"} color={"white"}>
                                    {`  Java, Spring, ReactJS, Bootstrap...`}
                                </Card.Title>
                                <HStack>
                                    <Image boxSize={"50px"} bgColor={"white"} src={javaLogo}></Image>
                                    <Image boxSize={"50px"} src={springLogo}></Image>
                                    <Image boxSize={"50px"} src={reactLogo}></Image>
                                    <Image boxSize={"50px"} bgColor={"white"} src={bootLogo}></Image>

                                </HStack>
                            </Flex>
                        </Card.Description>
                    </Container>
                </Card.Body>
            </Card.Root>
        </Stack>
    </VStack>

    <VStack id="carcassonne" w={"100%"} minH={{base: "auto", md: "100vh"}} bgRepeat={"no-repeat"} bgColor={"yellow.300"}>
        <Heading size={"4xl"} color={"black"} mt={8}>
            Carcassonne
        </Heading>
        <Stack mt={8} minH={"70%"} flexDirection={{base: "column", md:"row"}}>
            <Card.Root border={"none"} bgColor={"transparent"}  bgSize={"cover"} w={{base: "100%", md:"70%"}} maxW={{base: "100%", md:"70%"}}>
                <Card.Header width="80%" filter="auto" backdropBlur="sm"  >
                    <HStack  bgColor={"yellow.200"}>
                        <FaArrowRightLong color="black"/>
                        <Card.Title as="span" color={"black"}>
                            Adaptation du jeu de plateau Carcassonne
                        </Card.Title>
                    </HStack>
                    
                </Card.Header>
                <Card.Body>
                    <Container maxW="2xl" bgColor={"yellow.200"} mt={4} >
                        <Card.Title color={"black"} >Contexte</Card.Title>
                        <Card.Description  color={"black"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            {`  Projet dans une équipe de 5 personnes réalisé dans le cadre des enseignements de l'UTC, l'application propose de jouer au jeu de plateau Carcassonne avec interface graphique. L'utilisateur peut paramétrer ses parties en fonction du nombre de joueurs et choisir des extensions, l'application permet de placer les tuiles, les pions, calcule les points en fin de partie`}
                        </Card.Description>
                    </Container>
                    <Container  maxW="2xl" bgColor={"yellow.200"} my={4} pt={2}>
                        <Card.Title color={"black"} >Tâches réalisées</Card.Title>
                        <Box as="ul" fontSize={"sm"} ml={8} listStyleType="circle" color={"black"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            <li>Développement backend de l&apos;application, création et gestion des structures de données et des algorithmes de calcul des points, gestion des extensions</li>
                            <li>Conception de l&apos;application et réalisation d&apos;un diagramme de classe</li>
                        </Box>
                    </Container>
                    <Container  maxW="2xl" bgColor={"yellow.200"} pt={2} >
                        <Card.Title color={"black"} >Technologies et Outils</Card.Title>
                        <Card.Description  color={"black"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            <Flex justify="space-between">
                                <Card.Title fontSize={"sm"} color={"black"}>
                                    {`  C++, Qt`}
                                </Card.Title>
                                <HStack>
                                    <Image boxSize={"50px"} bgColor={"white"} src={cpluslogo}></Image>
                                    <Image boxSize={"50px"} src={qtLogo}></Image>
                                </HStack>
                            </Flex>
                        </Card.Description>
                    </Container>
                </Card.Body>
            </Card.Root>
            <Center ml={4}>
                <Carousel dark cards={carcassonneCards}/>
            </Center>
        </Stack>
    </VStack>


    <VStack id="laststand" w={"100%"} minH={{base: "auto", md: "100vh"}} bgRepeat={"no-repeat"} bgColor={"black"}>
        <Heading size={"4xl"} color={"white"} mt={8}>
            Last Stand 2242
        </Heading>
        <Stack mt={8} minH={"70%"} flexDirection={{base: "column", md:"row"}}>
            <Center ml={4}>
                <Carousel cards={lastSTandCards}/>
            </Center>
            <Card.Root border={"none"} bgColor={"transparent"}  bgSize={"cover"} w={{base: "100%", md:"70%"}} maxW={{base: "100%", md:"70%"}}>
                <Card.Header width="80%" filter="auto" backdropBlur="sm"  >
                    <HStack  bgColor={"gray.800"}>
                        <FaArrowRightLong color="white"/>
                        <Card.Title as="span" color={"white"}>
                            {`Jeu vidéo type "shooter" pour Android"`}
                        </Card.Title>
                    </HStack>
                    
                </Card.Header>
                <Card.Body>
                    <Container maxW="2xl" bgColor={"gray.800"} mt={4} >
                        <Card.Title color={"white"} >Contexte</Card.Title>
                        <Card.Description  color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            {`  Projet personnel réalisé pour apprendre le développement mobile sur Android`}
                        </Card.Description>
                    </Container>
                    <Container  maxW="2xl" bgColor={"gray.800"} my={4} pt={2}>
                        <Card.Title color={"white"} >Tâches réalisées</Card.Title>
                        <Box as="ul" fontSize={"sm"} ml={8} listStyleType="circle" color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            <li>Création du moteur de jeu en multithreading, détection des collisions, des déplacements</li>
                            <li>Création des ressources du jeu et de l&apos;interface</li>
                            <li>Fonctionnalité d&apos;ajout de niveaux via des fichiers csv</li>
                        </Box>
                    </Container>
                    <Container  maxW="2xl" bgColor={"gray.800"} pt={2} >
                        <Card.Title color={"white"} >Technologies et Outils</Card.Title>
                        <Card.Description  color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            <Flex  justify="space-between">
                                <Card.Title fontSize={"sm"} color={"white"}>
                                    {`  Java, Android Studio`}
                                </Card.Title>
                                <HStack>
                                    <Image boxSize={"50px"} bgColor={"white"} src={javaLogo}></Image>
                                    <Image boxSize={"50px"} bgColor={"white"} src={androidLogo}></Image>

                                </HStack>
                            </Flex>
                        </Card.Description>
                    </Container>
                </Card.Body>
            </Card.Root>
        </Stack>
    </VStack>

    <VStack id="ssp" w={"100%"} minH={{base: "auto", md: "100vh"}} bgRepeat={"no-repeat"} bgColor={"red.800"}>
        <Heading size={"4xl"} color={"white"} mt={8}>
            Site web Sous Sol Productions
        </Heading>
        <Stack mt={8} minH={"70%"} flexDirection={{base: "column", md:"row"}}>
            <Card.Root border={"none"} bgColor={"transparent"}  bgSize={"cover"} w={{base: "100%", md:"70%"}} maxW={{base: "100%", md:"70%"}}>
                <Card.Header width="80%" filter="auto" backdropBlur="sm"  >
                    <HStack  bgColor={"red.700"}>
                        <FaArrowRightLong color="white"/>
                        <Card.Title as="span" color={"white"}>
                            Site web réalisé pour l&apos;association SSP
                        </Card.Title>
                    </HStack>
                    
                </Card.Header>
                <Card.Body>
                    <Container maxW="2xl" bgColor={"red.700"} mt={4} >
                        <Card.Title color={"white"} >Contexte</Card.Title>
                        <Card.Description  color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            {`  Site web "vitrine", réalisé pour l'association Sous Sol Productions, l'association de vidéo de l'UTC, spécialisée dans le cadrage, la réalisation et le montage vidéo pour la plupart des évenements et toutes les assocations de l'UTC`}
                        </Card.Description>
                    </Container>
                    <Container  maxW="2xl" bgColor={"red.700"} my={4} pt={2}>
                        <Card.Title color={"white"} >Tâches réalisées</Card.Title>
                        <Box as="ul" fontSize={"sm"} ml={8} listStyleType="circle" color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            <li>Création des pages du site</li>
                            <li>Connection avec l&apos;API Youtube pour la récupération des dernières vidéos de l&apos;association</li>
                        </Box>
                    </Container>
                    <Container  maxW="2xl" bgColor={"red.700"} pt={2} >
                        <Card.Title color={"white"} >Technologies et Outils</Card.Title>
                        <Card.Description  color={"white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
                            <Flex justify="space-between">
                                <Card.Title fontSize={"sm"} color={"white"}>
                                    {`  HTML, CSS, PHP`}
                                </Card.Title>
                                <HStack>
                                    <Image boxSize={"50px"} objectFit={"contain"} bgColor={"white"} src={htmlLogo}></Image>
                                    <Image boxSize={"50px"}  objectFit={"contain"} bgColor={"white"} src={cssLogo}></Image>
                                    <Image boxSize={"50px"} bgColor={"white"} src={phpLogo}></Image>

                                </HStack>
                            </Flex>
                        </Card.Description>
                    </Container>
                </Card.Body>
            </Card.Root>
            <Center ml={4}>
                <Carousel cards={sspCards}/>
            </Center>
        </Stack>
    </VStack>

</Flex>
}