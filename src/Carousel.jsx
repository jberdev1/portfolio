import { Center, HStack, IconButton, Image } from "@chakra-ui/react"
import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useColorModeValue } from "./components/ui/color-mode"
import PropTypes from 'prop-types';

Carousel.propTypes = {
    cards : PropTypes.array,
    dark : PropTypes.bool
}
export default function Carousel({cards, dark}){
    const [slideIndex, setSlideIndex] = useState(0)
    return <HStack>
        <IconButton aria-label="Go back" bgColor={"transparent"} _hover={{bg: useColorModeValue("gray.400", "gray.400")}} onClick={() => {
                if(slideIndex == 0)
                    setSlideIndex(cards.length - 1)
                else 
                    setSlideIndex(slideIndex - 1)
                }
        }>
        <IoIosArrowBack color={dark ? "black" : "white"} />
        </IconButton>
        <Center>

            {cards.map((val, i) => {
                if(i == slideIndex)
                    return [<Image h={{base: "300px", md: "400px" }} width={{base: "300px", md: "550px"}} key={i} src={val} objectFit={"contain"} animationName="fade-in" animationDuration="1s"/>]
                    })}
        </Center>
        
        <IconButton aria-label="Go Forward" bgColor={"transparent"} _hover={{bg: useColorModeValue("gray.400", "gray.400")}}  onClick={() =>{
            if(slideIndex == cards.length - 1)
                setSlideIndex(0)
            else 
                setSlideIndex(slideIndex + 1)
            }
            }>
            <IoIosArrowForward color={dark ? "black" : "white"}/>    
        </IconButton>
    </HStack>
}