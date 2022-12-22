import { Heading, Text, VStack } from "@chakra-ui/react";

const Syllabus = () => {
  return (
    <VStack as="section" pt="48px" pb="32px">
      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: "32px", lg: "56px" }}
      >
        What will you learn?
      </Heading>
    </VStack>
  );
};

export default Syllabus;
