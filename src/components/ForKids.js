import React from "react";

import {Box, Heading, Text, Stack, Image, Flex} from '@chakra-ui/react'
import ArrowMoveDown from "./ArrowMouseDown";

import Cartoon from '../video/Cartoon.gif'



function ForKids (){
    return(
        <Stack w="full" p="10px" bg="#232428" fontFamily="poppins, sans-serif">
            <Stack  my="80px"mx="100px" direction={["column", "column", "row"]} spacing={["50px","-12","200px"]}>
                <Stack spacing="15px"  w={["320px","500px", "350px"]} h="300px" ml={["-50","22px","10"]}>
                    <Heading color="white" fontWeight="900" textAlign={["center", "center", "left"]}>YOUR KIDS ARE NOT LEFT OUT</Heading>
                    <Text color="#7D7D7D" fontSize="18px" textAlign={["center", "center", "left"]}>You can create profiles for your kids.</Text>
                    <Text color="#7D7D7D" fontSize="18px" textAlign={["center", "center", "left"]}>
                        Send them on adventures with their favorite characters in a 
                        space made just for them—free with your membership.
                    </Text>
                </Stack>
                <Stack  w="600px" h={["250px","300px","300px"]} px={["2px", "0", "0"]} >
                    <Box bgImage="/TVFrame.png" backgroundSize="cover" w={["400px","500px","500px"]} h={["240px","350px","350px"]} px="5px" pt="1" ml={["-85px","0","0"]}>
                        <Image src={Cartoon}/>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
}
export default ForKids;