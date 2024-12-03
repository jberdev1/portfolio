import { Box, Center, HStack, IconButton, Image } from "@chakra-ui/react"
import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useColorModeValue } from "./components/ui/color-mode"
import PropTypes from 'prop-types';

Carousel.propTypes = {
    cards : PropTypes.array
}
export default function Carousel({cards}){
    const [slideIndex, setSlideIndex] = useState(0)
    return <HStack>
        <IconButton aria-label="Go back" bgColor={"transparent"} _hover={{bg: useColorModeValue("gray.400", "gray.400")}} onClick={() => {
                if(slideIndex == 0)
                    setSlideIndex(cards.length - 1)
                else 
                    setSlideIndex(slideIndex - 1)
                }
        }>
        <IoIosArrowBack color={useColorModeValue("white", "white")} />
        </IconButton>
        <Center heigth="350px"  width="500px">

            {cards.map((val, i) => {
                if(i == slideIndex)
                    return [<Image key={i} src={val} objectFit={"cover"} animationName="fade-in" animationDuration="1s"/>]
                    })}
        </Center>
        
        <IconButton aria-label="Go Forward" bgColor={"transparent"} _hover={{bg: useColorModeValue("gray.400", "gray.400")}}  onClick={() =>{
            if(slideIndex == cards.length - 1)
                setSlideIndex(0)
            else 
                setSlideIndex(slideIndex + 1)
            }
            }>
            <IoIosArrowForward color={useColorModeValue("white", "white")}/>    
        </IconButton>
    </HStack>
}