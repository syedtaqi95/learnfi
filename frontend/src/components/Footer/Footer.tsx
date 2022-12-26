import HomePageSection from "@/components/HomePageSection";
import Brand from "@/components/Brand";
import { HStack, Image, Box, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <HomePageSection variant="footer">
      <HStack w="100%">
        <Image
          boxSize={{ base: "24px", md: "36px" }}
          src="/logo.png"
          alt="Brand Icon"
        />
        <Box px={"3"} fontWeight="bold" fontSize={{ base: "md", md: "xl" }}>
          <Brand />
        </Box>
      </HStack>

      <Box
        color={useColorModeValue("gray.500", "gray.400")}
        w="100%"
        fontSize="14px"
        mt={4}
      >
        Built with React and Chakra UI. Created by Syed Taqi Haider.
        <br />© LearnFi 2022
      </Box>
    </HomePageSection>
  );
};

export default Footer;
