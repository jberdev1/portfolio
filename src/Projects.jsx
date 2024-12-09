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
import PropTypes from 'prop-types'

import { soundWaveCards, chatCards, carcassonneCards, lastSTandCards, sspCards } from "./cards";



const Title = ({color, light, children}) => <Card.Header width="95%" filter="auto" backdropBlur="sm"  >
    <HStack  bgColor={color}>
        <FaArrowRightLong color={light ? "black" : "white"}/>
        <Card.Title as="span" color={light ? "black":  "white"} fontSize={{base: "sm", lg: "1xl"}}>
            {children}
        </Card.Title>
    </HStack>
</Card.Header>
Title.propTypes = {
    color: PropTypes.string,
    light: PropTypes.bool,
    children: PropTypes.node
}


const Desc = ({color, light, children}) => <Container maxW="2xl" bgColor={color} mt={4} >
    <Card.Title color={light ? "black" : "white"} fontSize={{base: "sm", lg: "xl"}} >Contexte</Card.Title>
    <Card.Description fontSize={{base: "2xs", lg: "sm"}}  color={light ? "black" : "white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
        {children}
    </Card.Description>
</Container>

Desc.propTypes = {
    color: PropTypes.string,
    light: PropTypes.bool,
    children: PropTypes.string
}
const Tasks = ({color, light, children}) => <Container  maxW="2xl" bgColor={color} my={4} pt={2}>
    <Card.Title color={light ? "black" : "white"} fontSize={{base: "sm", lg: "xl"}} >Tâches réalisées</Card.Title>
    <Box fontSize={{base: "2xs", lg: "sm"}}  as="ul"  ml={8} listStyleType="circle" color={light ? "black" : "white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
        {children}
    </Box>
</Container>

Tasks.propTypes = {
    color: PropTypes.string,
    light: PropTypes.bool,
    children: PropTypes.string
}

const Techs = ({color, light, logos, children}) => <Container  maxW="2xl" bgColor={color} pt={2} >
    <Card.Title color={light ? "black" : "white"} fontSize={{base: "sm", lg: "xl"}} >Technologies et Outils</Card.Title>
    <Card.Description  color={light ? "black" : "white"} whiteSpace={"pre-wrap"} textOverflow={"ellipsis"}>
        <Flex justify="space-between">
            <Card.Title fontSize={{base: "2xs", lg: "sm"}} color={light ? "black" : "white"}>
                {children}
            </Card.Title>
            <HStack>
                {logos && 
                    logos.map(
                        (src, i) => <Image key={i} boxSize={{base: "25px", lg: "50px"}} bgColor={"white"} src={src}></Image>
                    )
                }

            </HStack>
        </Flex>
    </Card.Description>
</Container>

Techs.propTypes = {
    color: PropTypes.string,
    light: PropTypes.bool,
    logos: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.string
}



export default function Projects(){


    return <Flex direction={"column"} w="100%">
    <VStack id="soundwave" w={"100%"}  bgRepeat={"no-repeat"} bgColor={"purple.900"}>
        <Heading size={"4xl"} color={"white"} mt={8}>
            SoundWave
        </Heading>
        <Stack mt={8} minH={"70%"} flexDirection={{base: "column", md:"row"}}>
            <Card.Root border={"none"} bgColor={"transparent"}  bgSize={"cover"} w={{base: "100%", md: "90%", lg:"70%"}} maxW={{base: "100%", lg:"70%"}}>
            <Title color="#641ba3">Application de partage de musique</Title>
                <Card.Body>
                    <Desc color="#641ba3">
                            {`  Projet dans une équipe d'une dizaine de personnes réalisé à l'UTC, cette application devait permettre aux utilisateurs d'uploader de la musique, partager à des groupes d'utilisateur, noter, commenter des musiques, et d'écouter de la musique`}
                    </Desc>
                    <Tasks color="#641ba3">
                        <li>Développement côté frontend avec JavaFX, création de l&apos;architecture du frontend</li>
                        <li>Création de maquettes</li>
                        <li>Veille technologique</li>
                        <li>Rédaction de documents de qualité et de spécifications techniques</li>
                        <li>Aide technique et formation d&apos;autres étudiants au Java</li>
                    </Tasks>
                    <Techs color="#641ba3" logos={[javaLogo, intelliLogo]}>
                        {`  Java, JavaFX, IntelliJ`}
                    </Techs>
                </Card.Body>
            </Card.Root>
            <Center ml={4}>
                <Carousel cards={soundWaveCards}/>
            </Center>
        </Stack>
    </VStack>



    <VStack id="chat" w={"100%"} bgRepeat={"no-repeat"} bgColor={"blue.800"}>
        <Heading size={"4xl"} color={"white"} mt={8}>
            Application de chat
        </Heading>
        <Stack mt={8} minH={"70%"} flexDirection={{base: "column", md:"row"}}>
            <Center ml={4}>
                <Carousel cards={chatCards}/>
            </Center>
            <Card.Root border={"none"} bgColor={"transparent"}  bgSize={"cover"} w={{base: "100%", lg:"70%"}} maxW={{base: "100%", lg:"70%"}}>
                <Title color="blue.700">Application de chat en réseau local</Title>
                <Card.Body>
                    <Desc color="blue.700">
                        {`  Projet réalisé avec un autre étudiant sur la création d'une application web de messagerie en réseau local, chaque utilisateur peut créer des salons de discussion ouverts pendant une durée limitée et inviter d'autres utilisateurs. Les messages sont actualisés en temps réel par l'application. L'application comporte également une interface admin pour gérer la base de données.`}
                    </Desc>
                   <Tasks color="blue.700">
                        <li>Maquettisation du frontend avec Bootstrap</li>
                        <li>Création du frontend, des différentes pages et des formulaires avec ReactJS</li>
                        <li>Création des requêtes côté front, mise en place de la connection par websockets, gestion des authentification côté frontend</li>
                        <li>Création d&apos;une partie de l&apos;interface admin</li>
                    </Tasks>
                    <Techs color="blue.700" logos={[javaLogo, springLogo, reactLogo, bootLogo]}>
                        {`  Java, Spring, ReactJS, Bootstrap...`}
                    </Techs>
                </Card.Body>
            </Card.Root>
        </Stack>
    </VStack>

    <VStack id="carcassonne" w={"100%"} bgRepeat={"no-repeat"} bgColor={"yellow.300"}>
        <Heading size={"4xl"} color={"black"} mt={8}>
            Carcassonne
        </Heading>
        <Stack mt={8} minH={"70%"} flexDirection={{base: "column", md:"row"}}>
            <Card.Root border={"none"} bgColor={"transparent"}  bgSize={"cover"} w={{base: "100%", lg:"70%"}} maxW={{base: "100%", lg:"70%"}}>
                <Title color={"yellow.200"} light>
                    Adaptation du jeu de plateau Carcassonne
                </Title>
                <Card.Body>
                    <Desc color={"yellow.200"} light >
                        {`  Projet dans une équipe de 5 personnes réalisé dans le cadre des enseignements de l'UTC, l'application propose de jouer au jeu de plateau Carcassonne avec interface graphique. L'utilisateur peut paramétrer ses parties en fonction du nombre de joueurs et choisir des extensions, l'application permet de placer les tuiles, les pions, calcule les points en fin de partie`}
                    </Desc>
                    <Tasks  color={"yellow.200"} light>
                        <li>Développement backend de l&apos;application, création et gestion des structures de données et des algorithmes de calcul des points, gestion des extensions</li>
                        <li>Conception de l&apos;application et réalisation d&apos;un diagramme de classe</li>
                    </Tasks>
                    <Techs  color={"yellow.200"} light logos={[cpluslogo, qtLogo]} >
                        {`  C++, Qt`}
                    </Techs>
                </Card.Body>
            </Card.Root>
            <Center ml={4}>
                <Carousel dark cards={carcassonneCards}/>
            </Center>
        </Stack>
    </VStack>


    <VStack id="laststand" w={"100%"}  bgRepeat={"no-repeat"} bgColor={"black"}>
        <Heading size={"4xl"} color={"white"} mt={8}>
            Last Stand 2242
        </Heading>
        <Stack mt={8} minH={"70%"} flexDirection={{base: "column", md:"row"}}>
            <Center ml={4}>
                <Carousel cards={lastSTandCards}/>
            </Center>
            <Card.Root border={"none"} bgColor={"transparent"}  bgSize={"cover"} w={{base: "100%", lg:"70%"}} maxW={{base: "100%", lg:"70%"}}>
                <Title color="gray.800">
                    {`Jeu vidéo type "shooter" pour Android"`}
                </Title>
                <Card.Body>
                    <Desc color="gray.800">
                        {`  Projet personnel réalisé pour apprendre le développement mobile sur Android`}
                    </Desc>
                    <Tasks  color={"gray.800"}>
                        <li>Création du moteur de jeu avec multithreading, détection des collisions, des déplacements</li>
                        <li>Création des ressources du jeu et de l&apos;interface</li>
                        <li>Fonctionnalité d&apos;ajout de niveaux via des fichiers csv</li>
                    </Tasks>
                    <Techs  color={"gray.800"} logos={[javaLogo, androidLogo]}>
                        {`  Java, Android Studio`}
                    </Techs>
                </Card.Body>
            </Card.Root>
        </Stack>
    </VStack>

    <VStack id="ssp" w={"100%"} bgRepeat={"no-repeat"} bgColor={"red.800"}>
        <Heading size={"4xl"} color={"white"} mt={8} textAlign={"center"}>
            Site web Sous Sol Productions
        </Heading>
        <Stack mt={8} minH={"70%"} flexDirection={{base: "column", md:"row"}}>
            <Card.Root border={"none"} bgColor={"transparent"}  bgSize={"cover"} w={{base: "100%", lg:"70%"}} maxW={{base: "100%", lg:"70%"}}>
                <Title color={"red.700"} >
                    Site web réalisé pour l&apos;association SSP
                </Title>
                <Card.Body>
                    <Desc color={"red.700"}>
                        {`  Site web "vitrine", réalisé pour l'association Sous Sol Productions, l'association de vidéo de l'UTC, spécialisée dans le cadrage, la réalisation et le montage vidéo pour la plupart des évenements et toutes les assocations de l'UTC`}
                    </Desc>
                    <Tasks color={"red.700"}>
                        <li>Création des pages du site</li>
                        <li>Connection avec l&apos;API Youtube pour la récupération des dernières vidéos de l&apos;association</li>
                    </Tasks>
                    <Techs  color={"red.700"} logos={[htmlLogo, cssLogo, phpLogo]} >
                        {`  HTML, CSS, PHP`}
                    </Techs>
                </Card.Body>
            </Card.Root>
            <Center ml={4}>
                <Carousel cards={sspCards}/>
            </Center>
        </Stack>
    </VStack>

</Flex>
}