import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface PropTypes {
  children: React.ReactNode;
  styles?: Object;
}

const TextBox = ({
  children,
  styles = { textStyle: "paragraph" },
}: PropTypes) => {
  return (
    <Box
      {...styles}
      color={useColorModeValue("gray.500", "gray.400")}
      pt={{ base: 2, md: 8 }}
    >
      {children}
    </Box>
  );
};

export default TextBox;
