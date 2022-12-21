import React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Title from "@/components/Title";

const Hero = () => {
  return (
    <VStack>
      {/* Main heading and description */}
      <Title />
    </VStack>
  );
};

export default Hero;
