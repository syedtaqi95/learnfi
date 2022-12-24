import { Heading, useColorModeValue, Flex, Button } from "@chakra-ui/react";
import Brand from "@/components/Brand";
import { IoMdArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import HomePageSection from "@/components/HomePageSection";
import TextBox from "@/components/TextBox";

const Hero = () => {
  return (
    <HomePageSection variant="hero">
      {/* Main heading */}
      <Heading
        as="h1"
        w="100%"
        fontSize={{ base: "48px", "2sm": "70px", lg: "100px" }}
      >
        <Brand variant="dynamic" />
      </Heading>

      {/* Title description */}
      <TextBox>
        LearnFi is a free web-based platform that uses a "learn-by-doing"
        approach to teach beginners how to start investing like a pro. Sign up
        today and start building a solid foundation for your financial success!
      </TextBox>

      {/* Button links */}
      <Flex
        pt={"40px"}
        w="100%"
        direction="row"
        justifyContent={"center"}
        gap={4}
        wrap="wrap"
      >
        {/* Get Started button */}
        <Button
          as="a"
          href="/"
          rightIcon={<IoMdArrowForward />}
          color={useColorModeValue("gray.50", "gray.800")}
          bg={useColorModeValue("green.500", "green.400")}
          variant="solid"
          w={{ base: "100%", "2sm": "200px" }}
          h="64px"
          px="40px"
          maxW={{ base: "100%" }}
          _hover={{ bg: useColorModeValue("green.600", "green.300") }}
          fontSize={"20px"}
        >
          Get Started
        </Button>

        {/* GitHub button */}
        <Button
          as="a"
          href="https://github.com/syedtaqi95/learnfi"
          target={"_blank"}
          leftIcon={<FaGithub />}
          color={useColorModeValue("gray.800", "gray.50")}
          bg={useColorModeValue("gray.200", "gray.700")}
          variant="solid"
          w={{ base: "100%", "2sm": "200px" }}
          h="64px"
          px="40px"
          maxW={{ base: "100%" }}
          _hover={{ bg: useColorModeValue("gray.300", "gray.600") }}
          fontSize={"20px"}
        >
          GitHub
        </Button>
      </Flex>
    </HomePageSection>
  );
};

export default Hero;
