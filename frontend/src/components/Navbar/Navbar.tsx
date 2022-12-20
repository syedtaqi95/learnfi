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
  Link,
  useStyleConfig,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = (props: { variant?: string; children?: any }) => {
  // Color mode utils
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.800");

  // import style from theme
  const { variant } = props;
  const styles = useStyleConfig("Navbar", { variant });

  return (
    <Box as="nav" __css={styles}>
      {/* All viewports - Brand on the left */}
      <Link href="/">
        <HStack>
          <Image
            boxSize={{ base: "24px", md: "48px" }}
            src="/logo.svg"
            alt="Brand Icon"
          />
          <Box px={"3"} fontWeight="bold" fontSize={{ base: "md", md: "xl" }}>
            LearnFi
          </Box>
        </HStack>
      </Link>

      {/* Desktop - website links on the right */}
      <HStack display={{ base: "none", md: "initial" }}>
        <Button as="a" href={"/"} bg={bg}>
          Home
        </Button>

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
                color="white"
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
                <MenuItem as="a" href="/">
                  Home
                </MenuItem>

                <MenuItem>
                  {/* Color mode button */}
                  {colorMode === "light" ? (
                    <MoonIcon onClick={toggleColorMode} />
                  ) : (
                    <SunIcon onClick={toggleColorMode} />
                  )}
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Box>
  );
};

export default Navbar;
