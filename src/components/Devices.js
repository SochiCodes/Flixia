import React from "react";

import {Box, Heading, Text, Image, Stack, Spacer} from '@chakra-ui/react'




function Devices (){
    return(
        <Stack align="center" direction="row" spacing="50px" color="white">
            <Box w="270px" h="250" bgImage="../images/The Underground Railroad.png">
                <Stack p="20px" spacing="20px">
                    <Box>
                        <Image src="/phone.png"/>
                    </Box>
                    <Heading align="center" fontFamily="poppins, sans-serif" fontSize="20px" fontWeight="900">MOBILE</Heading>MOBILE
                </Stack>
            </Box>
            <Box w="270px" h="250" bgImage="../images/The Underground Railroad.png">
                <Stack p="20px" spacing="20px">
                    <Box>
                        <Image src="/tv.png"/>
                    </Box>
                    <Heading align="center" fontFamily="poppins, sans-serif" fontSize="20px" fontWeight="900">TV</Heading>
                </Stack>
            </Box>
            <Box w="270px" h="250" bgImage="../images/The Underground Railroad.png">
                <Stack p="20px" spacing="20px">
                    <Box>
                        <Image src="/pc.png"/>
                    </Box>
                    <Heading align="center" fontFamily="poppins, sans-serif" fontSize="20px" fontWeight="900">COMPUTER</Heading>
                </Stack>
            </Box>
            <Box w="270px" h="250" bgImage="../images/The Underground Railroad.png">
                <Stack p="20px" spacing="20px">
                    <Box>
                        <Image src="/game.png"/>
                    </Box>
                    <Heading align="center" fontFamily="poppins, sans-serif" fontSize="20px" fontWeight="900">CONSOLE</Heading>
                </Stack>
            </Box>
        </Stack>
    );
}
export default Devices;