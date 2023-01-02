import { Heading, useColorModeValue, Flex, Button, As } from "@chakra-ui/react";
import Brand from "@/components/Brand";
import { IoMdArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import HomePageSection from "@/components/HomePageSection";
import TextBox from "@/components/TextBox";
import { Link } from "react-router-dom";

const Hero = () => {
  const commonButtonStyles = {
    variant: "solid",
    w: { base: "100%", "2sm": "200px" },
    h: "64px",
    px: "40px",
    maxW: "100%",
    fontSize: "20px",
  };

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
        {/* Sign up button */}

        <Button
          {...commonButtonStyles}
          rightIcon={<IoMdArrowForward />}
          color={useColorModeValue("gray.50", "gray.800")}
          bg={useColorModeValue("green.500", "green.400")}
          _hover={{ bg: useColorModeValue("green.600", "green.300") }}
        >
          <Link to="signup">Sign Up</Link>
        </Button>

        {/* GitHub button */}
        <Button
          {...commonButtonStyles}
          as="a"
          href="https://github.com/syedtaqi95/learnfi"
          target={"_blank"}
          leftIcon={<FaGithub />}
          color={useColorModeValue("gray.800", "gray.50")}
          bg={useColorModeValue("gray.200", "gray.700")}
          _hover={{ bg: useColorModeValue("gray.300", "gray.600") }}
        >
          GitHub
        </Button>
      </Flex>
    </HomePageSection>
  );
};

export default Hero;
