import { Box, Heading, VStack, useColorModeValue } from "@chakra-ui/react";
import Brand from "@/components/Brand";

const Hero = () => {
  return (
    <VStack>
      {/* Main heading */}
      <Heading
        mt={{ base: 8, md: 28 }}
        as="h1"
        w="100%"
        fontSize={{ base: "48px", md: "70px", lg: "100px" }}
      >
        <Brand variant="dynamic" />
      </Heading>

      {/* Title description */}
      <Box
        color={useColorModeValue("gray.500", "gray.400")}
        fontSize={{ base: "16px", md: "20px" }}
        pt={{ base: 2, md: 8 }}
      >
        LearnFi is a web-based platform that teaches beginners the basics of
        investing using a "learn-by-doing" approach. Take control of your
        financial future and start investing like a pro. Sign up today and start
        building a solid foundation for your financial success!
      </Box>
    </VStack>
  );
};

export default Hero;
