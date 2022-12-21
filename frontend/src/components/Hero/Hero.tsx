import { Box, Heading, VStack, useColorModeValue } from "@chakra-ui/react";
import Brand from "@/components/Brand";

const Hero = () => {
  return (
    <VStack mt={{ base: "40px", md: 36 }}>
      {/* Main heading */}
      <Heading
        as="h1"
        w="100%"
        fontSize={{ base: "48px", "2sm": "70px", lg: "100px" }}
      >
        <Brand variant="dynamic" />
      </Heading>

      {/* Title description */}
      <Box
        color={useColorModeValue("gray.500", "gray.400")}
        fontSize={{ base: "16px", md: "20px" }}
        pt={{ base: 2, md: 8 }}
        textAlign="center"
      >
        LearnFi is a web-based platform that uses a "learn-by-doing" approach to
        teach beginners how to start investing like a pro. Sign up today and
        start building a solid foundation for your financial success!
      </Box>
    </VStack>
  );
};

export default Hero;
