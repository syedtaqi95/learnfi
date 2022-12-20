import { Text, useColorModeValue } from "@chakra-ui/react";
const Brand = () => {
  return (
    <>
      <Text as="span" color={useColorModeValue("green.400", "white")}>
        Learn
      </Text>
      <Text as="span" color={useColorModeValue("black", "green.400")}>
        Fi
      </Text>
    </>
  );
};

export default Brand;
