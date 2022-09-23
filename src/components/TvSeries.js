import React from "react";

import FilmCard from "./FilmCard";

import {Box, Heading, Text, Stack,} from '@chakra-ui/react'





function TvSeries (){
    return(
        <Box w="full" p="10px" bg="#0F0F11"  fontFamily="poppins, sans-serif">
            <Stack align="center" mt="90px" px="15px">
                <Heading align="center" color="#FBBB47" fontSize="16px" fontWeight="700">EVERYTHING PACKAGED FOR YOU</Heading>
                <Heading align="center" color="white" fontWeight="900" >ALL THE TV SERIES YOU LOVE</Heading>
                <Text align="center" color="#7D7D7D" fontSize="18px" maxW="600px">Stream full seasons of exclusive series, current-season episodes, hit movies, Flixia Originals, kids shows, and more.</Text>
            </Stack>
            <Box w="full" align="center" mt="100px" px="50px">
                <FilmCard/>
            </Box>
        </Box>
    );
}
export default TvSeries;