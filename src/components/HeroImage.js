import React from "react";



import AlitaBattleAngel from '../video/AlitaBattleAngel.mp4'
import ArrowMoveDown from "../components/ArrowMouseDown";


import { 
    Flex, 
    Text, 
    Box, 
    AspectRatio, 
    Heading, 
    Stack, 
    Button,
    Spacer,
    Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


function HeroImage(){
    return (
        <Box w="full">
            <Box>
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100vh"
                    bgGradient="linear(to-t, #232428  0%, #0F0F11 50%)"
                    opacity=".7"
                    zIndex="1"
                />
                <AspectRatio w="100%" h="100vh" objectFit="cover">
                    <video src={AlitaBattleAngel} autoPlay loop  muted width="100%" height="100vh"/>
                </AspectRatio>
            </Box>
            
            <Box
                position="absolute"
                w="100%"
                top="0"
                right="0"
                display="flex"
                zIndex="2"
            >
                <Flex py="28px" align="center" w="full">
                    <Box  ml="50px">
                        <Link>
                            <Image 
                                src="/FlixiaLogo.png"
                                objectFit='cover'
                                h='30px'
                            />
                        </Link>
                    </Box>
                        <Spacer/>
                        <Button
                            variant="outline" 
                            fontWeight="regular"
                            size="sm"
                            w="120px"
                            color="white"
                            borderRadius="50px"
                            mr="50px"
                            _hover={{bg:"grey"}}
                        >
                    Login
                </Button>
                    
                </Flex>
            </Box>
            <Stack
                position="absolute"
                w="100%"
                h="100vh"
                top="0"
                right="0"
                display="flex"
                justifyContent="center"
                color="white"
                zIndex="2"
                fontFamily="poppins, sans-serif"
                align="center"
                spacing="50px"
            >
                
                    <Stack>
                        <Heading align="center" fontFamily="poppins, sans-serif" fontWeight="black" w="680px" fontSize="60px">UNLIMITED MOVIES, TV SHOWS AND MORE.</Heading>
                        <Text align="center" fontWeight="light" color="#C5C5C5">Watch anywhere. Cancel anytime.</Text>
                        </Stack>
                    <Stack>
                        <Button 
                            variant="outline" 
                            fontWeight="regular" 
                            borderRadius="60px" 
                            p="5" bg="#FBBB47" 
                            color="#0F0F11" 
                            border="none" 
                            size="lg"
                            _hover={{bg:"#FFC966"}}
                        >
                            Register Now!
                        </Button>
                    </Stack>
                
                <Stack>
                    <ArrowMoveDown/>
                </Stack>
            </Stack>
        </Box>   
    );
};

export default HeroImage;