import React from "react";

import FilmCard from "./FilmCard";

import {Box, Heading, Text, Stack, Flex} from '@chakra-ui/react'





function TvSeries (){
    return(
        <Box w="full" p="10px" bg="#0F0F11" h="800px"  fontFamily="poppins, sans-serif">
            <Stack align="center" mt="90px">
                <Heading color="#FBBB47" fontSize="16px" fontWeight="700">EVERYTHING PACKAGED FOR YOU</Heading>
                <Heading color="white" fontWeight="900">ALL THE TV SERIES YOU LOVE</Heading>
                <Text color="#7D7D7D" fontSize="18px" w="600px" align="center">Stream full seasons of exclusive series, current-season episodes, hit movies, Flixia Originals, kids shows, and more.</Text>
            </Stack>
            <Box w="full" align="center" mt="100px" px="50px">
                <FilmCard/>
            </Box>
        </Box>
    );
}
export default TvSeries;