import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface PropTypes {
  children: React.ReactNode;
}

const TextBox = ({ children }: PropTypes) => {
  return (
    <Box
      textStyle={"paragraph"}
      color={useColorModeValue("gray.500", "gray.400")}
      pt={{ base: 2, md: 8 }}
    >
      {children}
    </Box>
  );
};

export default TextBox;
