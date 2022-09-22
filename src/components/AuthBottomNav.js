import React from "react";
import { Link as URL } from "react-router-dom";
import {
  Box,
  Flex,
  Container,
  Stack,
  Spacer,
  Divider,
  Hide,
  Link,
  Text,
} from "@chakra-ui/react";

export default function AuthBottomNav() {
  return (
    <Box w="100%" color="#C9C9C9" py={5} bg="#0F0F11">
      <Container maxWidth="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: 1, md: 4 }}
            mb={{ base: 6, md: 0 }}
          >
            <Box>
              <Link fontSize="12px">
                Cookie Policy
              </Link>
            </Box>
            <Box>
              <Link fontSize="12px">
                Privacy Policy
              </Link>
            </Box>
            <Box>
              <Link fontSize="12px">
                Terms of Use
              </Link>
            </Box>
          </Stack>
          <Spacer />
          <Hide above="md">
            <Divider h="1px" />
          </Hide>

          <Box py={{ base: 3, md: 0 }}>
            <Text fontSize="12px">
              © {new Date().getFullYear()} Flixia, All Rights Reserved
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
