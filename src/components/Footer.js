import React from "react";


import {
  Box,
  Container,
  Grid,
  GridItem,
  Flex,
  Link,
  UnorderedList,
  ListItem,
  Image,
  Text,
} from "@chakra-ui/react";

import { BsFacebook, BsPinterest, BsTwitter,} from "react-icons/bs";
import { AiFillInstagram,} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <Box bg="#0F0F11" py="100px" w="full"  fontFamily="poppins, sans-serif">
        <Container maxWidth="container.xl">
          <Grid
            color="white"
            templateColumns={{ base: "1fr 1fr", lg: "repeat(4, 1fr)" }}
            gap="3rem"
            textAlign="center"
          >
            <GridItem align="left">
              <UnorderedList listStyleType="none" lineHeight="1.5" alignContent="left">
                <ListItem fontSize="1.1rem" mb={4} fontWeight="700" >
                  About
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }} >
                    Flixia
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }}>
                    Mission
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }}>
                    Vision
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }}>
                    Contact
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }}>
                    FAQ
                  </Link>
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem align="left">
              <UnorderedList listStyleType="none" lineHeight="1.5">
                <ListItem fontSize="1.1rem" mb={4} fontWeight="700">
                  Supported Devices
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }}>
                    TV
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }}>
                    Mobile and Tablet
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }}>
                    Game Console
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }}>
                    Laptops
                  </Link>
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem align="left">
              <UnorderedList listStyleType="none" lineHeight="1.5">
                <ListItem fontSize="1.1rem" mb={4} fontWeight="700">
                  Our resources
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }}>
                    Blog
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }}>
                    Subscription
                  </Link>
                </ListItem>
                <ListItem>
                  <Link color="#7D7D7D" _hover={{ color: "#FBBB47" }}>
                     Ways to Watch
                  </Link>
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem pl={{ base: "1rem", md: "0" }} align="left"> 
              <Text fontSize="1.1rem" fontWeight="700" mb={4}>
                Follow Us
              </Text>
              <Flex align="center" gap="1rem" color="#FBBB47">
                <Link><BsFacebook/> </Link>
                <Link><AiFillInstagram/> </Link>
                <Link><BsTwitter/> </Link>
                <Link><BsPinterest/> </Link>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
