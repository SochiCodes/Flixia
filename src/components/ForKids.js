import React from "react";

import {Box, Heading, Text, Stack, Image} from '@chakra-ui/react'
import ArrowMoveDown from "./ArrowMouseDown";





function ForKids (){
    return(
        <Box w="full" p="10px" bg="#232428" h="500px"  fontFamily="poppins, sans-serif">
            <Stack  mt="90px" spacing="200px"  direction="row">
                <Stack spacing="15px"  w="320px" h="300px" ml="150px">
                    <Heading color="white" fontWeight="900">YOUR KIDS ARE NOT LEFT OUT</Heading>

                    <Text color="#7D7D7D" fontSize="18px">You can create profiles for your kids.</Text>
                    <Text color="#7D7D7D" fontSize="18px">
                        Send them on adventures with their favorite characters in a 
                        space made just for them—free with your membership.
                    </Text>
                </Stack>
                <Stack  w="600px" h="300px" >
                    <Box bgImage="/TVFrame.png" backgroundSize="cover" w="500px" h="350px" pl="5px" pr="5px" pt="1" >
                        <Image src="/cartoon.gif"/>
                    </Box>
                </Stack>
        
            </Stack>
        </Box>
    );
}
export default ForKids;