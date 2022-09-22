import React from "react";

import {Box, Heading, Text, Flex, Stack, Spacer} from '@chakra-ui/react'




function FilmCard (){
    return(
        <Stack align="center" direction="row" spacing="20px">
            <Box w="300px" h="410px" bgImage="/TheUndergroundRailroad.png" backgroundSize="cover">
                <Stack p="20px" spacing="300px">
                    <Stack> 
                        <Heading fontFamily="poppins, sans-serif" align="left" color="#FBBB47" fontSize="12px" fontWeight="700">Past & Current Seasons</Heading>
                        <Heading fontFamily="poppins, sans-serif" align="left" fontSize="12px" fontWeight="700" color="white">THE UNDERGROUND RAILROAD</Heading>
                    </Stack>
                    <Heading align="center" fontFamily="poppins, sans-serif" fontSize="20px" fontWeight="900" color="white">TV ORIGINALS</Heading>
                </Stack>
            </Box>
            <Box w="300px" h="410px" bgImage="/JohnWick.png" backgroundSize="cover">
                <Stack p="20px" spacing="300px">
                    <Stack> 
                        <Heading fontFamily="poppins, sans-serif" align="left" color="#FBBB47" fontSize="12px" fontWeight="700">New & Classis</Heading>
                        <Heading fontFamily="poppins, sans-serif" align="left" fontSize="12px" fontWeight="700" color="white">JOHN WICK 4</Heading>
                    </Stack>
                    <Heading align="center" fontFamily="poppins, sans-serif" fontSize="20px" fontWeight="900" color="white" >MOVIES</Heading>
                </Stack>
            </Box>
            <Box w="300px" h="410px" bgImage="/DefendingJacob.png" backgroundSize="cover">
                <Stack p="20px" spacing="300px">
                    <Stack> 
                        <Heading fontFamily="poppins, sans-serif" align="left" color="#FBBB47" fontSize="12px" fontWeight="700">Ground Breaking</Heading>
                        <Heading fontFamily="poppins, sans-serif" align="left" fontSize="12px" fontWeight="700" color="white">DEFENDING JACOB</Heading>
                    </Stack>
                    <Heading align="center" fontFamily="poppins, sans-serif" fontSize="20px" fontWeight="900" color="white" >TV SHOWS</Heading>
                </Stack>
            </Box>
            <Box w="300px" h="410px" bgImage="/Alita.png" backgroundSize="cover">
                <Stack p="20px" spacing="300px">
                    <Stack> 
                        <Heading fontFamily="poppins, sans-serif" align="left" color="#FBBB47" fontSize="12px" fontWeight="700">Premium Package</Heading>
                        <Heading fontFamily="poppins, sans-serif" align="left" fontSize="12px" fontWeight="700" color="white">THE UNDERGROUND RAILROAD</Heading>
                    </Stack>
                    <Heading align="center" fontFamily="poppins, sans-serif" fontSize="20px" fontWeight="900" color="white">ALITA: BATTLE ANGEL</Heading>
                </Stack>
            </Box>
        </Stack>
    );
}
export default FilmCard;