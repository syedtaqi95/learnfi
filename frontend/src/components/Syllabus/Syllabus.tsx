import { Heading, Box, VStack, useColorModeValue } from "@chakra-ui/react";

const Syllabus = () => {
  return (
    <VStack as="section" pt="48px" pb="32px">
      <Heading
        as="h2"
        textStyle={"section_heading"}
      >
        What will you learn?
      </Heading>

      <Box
        textStyle={"paragraph"}
        color={useColorModeValue("gray.500", "gray.400")}
        pt={{ base: 2, md: 8 }}
      >
        We'll cover the basics of investing and provide you with the knowledge
        and skills you need to make informed decisions about your money. By the
        end of the course, you'll have a solid foundation in investing and be
        well on your way to becoming an investing pro.
      </Box>
    </VStack>
  );
};

export default Syllabus;
