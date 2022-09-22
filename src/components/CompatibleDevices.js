import React from "react";

import {Box, Heading, Text, Stack, Flex} from '@chakra-ui/react'
import Devices from "./Devices";






function CompatibleDevices (){
    return(
        <Box w="full" p="10px" bg="#0F0F11" h="650px"  fontFamily="poppins, sans-serif">
            <Stack align="center" mt="90px" spacing="50px">
                <Heading color="white" fontWeight="900">WATCH AND SAVE ON YOUR DEVICES</Heading>
                <Box w="full" align="center" mt="100px" px="50px">
                    <Devices/>
                </Box>
                <Text color="#7D7D7D" fontSize="18px" w="600px" align="center" pb="20px">Stream full seasons of exclusive series, current-season episodes, hit movies, Flixia Originals, kids shows, and more.</Text>
            </Stack>
            
        </Box>
    );
}
export default CompatibleDevices;