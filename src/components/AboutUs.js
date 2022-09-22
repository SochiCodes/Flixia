import React from "react";

import {Box, Heading, Text, Stack, Flex} from '@chakra-ui/react'
import ArrowMoveDown from "./ArrowMouseDown";





function AboutUs (){
    return(
        <Box w="full" p="10px" bg="#0F0F11" h="650px"  fontFamily="poppins, sans-serif">
            <Stack align="center" mt="90px" spacing="70px">
                <Stack spacing="15px" align="center">
                    <Heading color="#FBBB47" fontSize="16px" fontWeight="700">WHO WE ARE</Heading>
                    <Heading color="white" fontWeight="900">WE ARE HERE FOR YOU!</Heading>
                    <Text color="#7D7D7D" fontSize="18px" w="800px" align="center">
                        Flixia is a streaming service that offers a wide variety of award-winning TV shows, 
                        movies, anime, documentaries, and more on thousands of internet-connected devices.
                    </Text>
                    <Text color="#7D7D7D" fontSize="18px" w="800px" align="center">
                        You can watch as much as you want, whenever you want without a single commercial U+2013 all
                        for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                    </Text>
                    <Text color="#7D7D7D" fontSize="18px" w="800px" align="center">
                        Also, our Flixia Kids experience is included in your membership to give parents control while kids enjoy 
                        family-friendly TV shows and movies in their own space.
                    </Text>
                    <Text color="#7D7D7D" fontSize="18px" w="800px" align="center">
                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content
                        kids can watch and block specific titles you donU+2019t want kids to see.
                    </Text>
                </Stack>
                <Stack color="white">
                    <ArrowMoveDown/>
                </Stack>
        
            </Stack>
        </Box>
    );
}
export default AboutUs;