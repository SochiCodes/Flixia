import React from "react";

import {
    Box, 
    Text, 
    Heading, 
    Stack, 
    Divider,
    FormControl,
    Input,
    Checkbox,
    Link,
    Button,
    Spacer,
    InputGroup,
    InputLeftElement,
    InputLeftAddon,
} from '@chakra-ui/react'

import { FaUser,} from "react-icons/fa";



function LoginRegister (){
    return(
        <Box w="full" h="700px" bg="#232428">
            <Stack py="100px" spacing="50px">
                <Heading align="center" color="white" fontFamily="poppins">GET ON BOARD</Heading>
                <Stack direction="row" justifyContent="center" color="#7D7D7D" spacing={["0px","30px", "60px"]}>
                    <Stack w="500px" h="500px" p="30px">
                        <Box>
                            <Stack spacing="50px">
                                <FormControl id="email">
                                    <InputGroup>
                                        <InputLeftElement/>
                                        <Input type="email" 
                                            placeholder="Username or Email" 
                                            p="30px" borderRadius="25px" 
                                            variant="outline" 
                                            focusBorderColor="#FBBB47" 
                                            borderColor="#7D7D7D" 
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="password">
                                    <Input type="password" placeholder="Enter Password" p="30px" borderRadius="25px" variant="outline" focusBorderColor="#FBBB47" borderColor="#7D7D7D"/>
                                </FormControl>
                                <Stack direction="row">
                                    <Checkbox colorScheme="none" defaultChecked>Remember Me</Checkbox>
                                    <Spacer/>
                                    <Link>Forgot Password</Link>
                                </Stack>
                                <Button p="30px" variant="outline" borderRadius="25px" borderColor="#FBBB47" color="#FBBB47" _hover={{fontSize:"18px"}}>LOGIN</Button>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack p="30px">
                        <Divider orientation="vertical" borderColor="#D9D9D9" h="350px"/>
                    </Stack>
                    <Stack w="500px" h="500px"  p="30px">
                        <Box>
                            <Stack spacing="10">
                                <FormControl id="email">
                                    <Input type="email" placeholder="Enter Valid Email" p="30px" borderRadius="25px" variant="outline" focusBorderColor="#FBBB47" borderColor="#7D7D7D"/>
                                </FormControl>
                                <FormControl id="password">
                                    <Input type="password" placeholder="Enter Password" p="30px" borderRadius="25px" variant="outline" focusBorderColor="#FBBB47" borderColor="#7D7D7D"/>
                                </FormControl>
                                <FormControl id="password">
                                    <Input type="password" placeholder="Re-enter Password" p="30px" borderRadius="25px" variant="outline" focusBorderColor="#FBBB47" borderColor="#7D7D7D"/>
                                </FormControl>
                                <Button p="30px" borderRadius="25px" color="#0F0F11" bg="#FBBB47" _hover={{bg:"#FFCA69"}}>REGISTER</Button>
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}
export default LoginRegister;