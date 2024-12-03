import { Card, Center, Heading, Stack, VStack } from "@chakra-ui/react"
import s1 from "./assets/projects/soundwave/soundwave.png"
import s2 from "./assets/projects/soundwave/soundwave2.png"
import s3 from "./assets/projects/soundwave/SoundWave3.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";


export default function Projects(){
    const soundWaveCards = [s1,s2,s3]
    return <>
    <VStack w={"100%"} minH={{base: "auto", md: "100vh"}} bgColor={"purple.900"}>
        <Heading size={"4xl"} color={"white"} mt={8}>
            SoundWave
        </Heading>
        <Stack mt={8}  flexDirection={{base: "column", md:"row"}} >
            <Card.Root  bgColor={"pink.500"} backdropBlur={"sm"} backdropFilter="auto" >
                <Card.Header filter="auto" backdropBlur="sm">
                <Card.Title color={"white"}>Application de partage de musique</Card.Title>
                </Card.Header>
            </Card.Root>
            <Center>
                <Carousel cards={soundWaveCards}/>
            </Center>
        </Stack>
    </VStack>
</>
}