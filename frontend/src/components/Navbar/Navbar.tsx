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
  const bg = useColorModeValue("white", "gray.800");
  const buttonBg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box
      as="nav"
      py={4}
      position="sticky"
      top="0"
      bg={bg}
      zIndex={1}
      borderBottomWidth="1px"
      borderColor="gray.100"
    >
      <Container
        maxW="100vw"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* All viewports - Brand on the left */}
        <Link href="/">
          <Image
            boxSize={{ base: "40px", md: "50px" }}
            src="/favicon.ico"
            alt="Brand Icon"
            filter={colorMode === "light" ? "invert(1)" : undefined}
          />
          <span>LearnFi</span>
        </Link>

        {/* Desktop - website links on the right */}
        <HStack display={{ base: "none", md: "initial" }}>
          <Button
            as="a"
            href={"/"}
            bg={bg}
            onMouseOver={(e) => { e.currentTarget.style.textDecorationLine = "underline" }}
            onMouseOut={(e) => { e.currentTarget.style.textDecorationLine = "none" }}
          >
            Home
          </Button>

          {/* Color mode button */}
          <Button onClick={toggleColorMode} bg={buttonBg}>
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
                      <MoonIcon onClick={toggleColorMode} bg={buttonBg} /> :
                      <SunIcon onClick={toggleColorMode} bg={buttonBg} />
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
