import {
  Box,
  Flex,
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
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import Brand from "@/components/Brand";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Color mode utils
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.800");

  // import style from theme
  const navBarStyles = {
    as: "nav" as any,
    py: 2,
    px: { base: 4, md: 16 },
    position: "sticky" as any,
    maxW: "100%",
    top: "0",
    backdropFilter: "auto",
    backdropBlur: "8px",
    zIndex: "overlay",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <Flex {...navBarStyles} maxW={"100%"}>
      {/* All viewports - Brand on the left */}
      <Link to="/">
        <HStack>
          <Image
            boxSize={{ base: "24px", md: "48px" }}
            src="/logo.png"
            alt="Brand Icon"
          />
          <Box as="span" fontWeight="bold" fontSize={{ base: "md", md: "xl" }}>
            <Brand />
          </Box>
        </HStack>
      </Link>

      {/* Desktop - website links on the right */}
      <HStack display={{ base: "none", md: "initial" }}>
        <Link to="/">
          <Button bg={bg}>Home</Button>
        </Link>

        <IconButton
          as="a"
          href="https://github.com/syedtaqi95/learnfi"
          icon={<FaGithub />}
          aria-label="Github link"
          bg={bg}
          target="_blank"
        />

        {/* Color mode button */}
        <Button onClick={toggleColorMode} bg={bg}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>

      {/* Mobile - dropdown menu */}
      <Flex display={{ base: "initial", md: "none" }}>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                as={IconButton}
                aria-label="menu"
                bg={bg}
                icon={
                  isOpen ? (
                    <CloseIcon
                      height="1.4em"
                      color={colorMode === "light" ? "black" : "white"}
                    />
                  ) : (
                    <HamburgerIcon
                      height="1.4em"
                      color={colorMode === "light" ? "black" : "white"}
                    />
                  )
                }
                id="1"
              />
              <MenuList>
                <Link to="/">
                  <MenuItem>Home</MenuItem>
                </Link>

                <MenuItem onClick={toggleColorMode}>
                  {/* Color mode button */}
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
