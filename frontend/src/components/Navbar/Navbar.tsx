import React from "react";
import {
  Box,
  Container,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Button,
  useColorModeValue,
  Image,
  Link,
  Icon,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  // Color mode utils
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box
      as="nav"
      py={2}
      position="sticky"
      top="0"
      bg={bg}
    >
      <Container
        maxW="95vw"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* All viewports - Brand on the left */}
        <Link href="/">
          <HStack>
            <Image
              boxSize={{ base: "24px", md: "48px" }}
              src="/logo.svg"
              alt="Brand Icon"
            />
            <Box color="teal.100" >
              LearnFi
            </Box>
          </HStack>

        </Link>

        {/* Desktop - website links on the right */}
        <HStack display={{ base: "none", md: "initial" }}>
          <Button
            as="a"
            href={"/"}
            colorScheme="teal"
          >
            Home
          </Button>

          {/* Color mode button */}
          <Button onClick={toggleColorMode} bg={bg}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>

        {/* Mobile - dropdown menu */}
        <HStack display={{ base: "initial", md: "none" }}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={IconButton}
                  aria-label="menu"
                  color="white"
                  icon={isOpen ?
                    <CloseIcon
                      height="1.4em"
                      color={colorMode === "light" ? "black" : "white"}
                    /> :
                    <HamburgerIcon
                      height="1.4em"
                      color={colorMode === "light" ? "black" : "white"}
                    />
                  }
                  id="1"
                />
                <MenuList>
                  <MenuItem
                    as="a"
                    href="/"
                  >
                    Home
                  </MenuItem>

                  <MenuItem>
                    {/* Color mode button */}
                    {colorMode === "light" ?
                      <MoonIcon onClick={toggleColorMode} bg={bg} /> :
                      <SunIcon onClick={toggleColorMode} bg={bg} />
                    }
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
