import {
  Heading,
  Box,
  VStack,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import HomePageSection from "@/components/HomePageSection";

const Syllabus = () => {
  return (
    <HomePageSection variant="section">
      <Heading as="h2" textStyle={"section_heading"}>
        What you will learn
      </Heading>

      {/* Syllabus summary */}
      <Box
        textStyle={"paragraph"}
        color={useColorModeValue("gray.500", "gray.400")}
        pt={{ base: 2, md: 8 }}
      >
        We'll cover the basics of investing and provide you with the knowledge
        and skills you need to make informed decisions about your money. By the
        end, you'll have a solid foundation in investing and be well on your way
        to becoming an investing pro.
      </Box>

      {/* Syllabus list */}
      <Box
        textStyle={"list"}
        color={useColorModeValue("gray.500", "gray.400")}
        pt={{ base: 2, md: 4 }}
        maxW="90%"
      >
        <List spacing={{ base: 4, md: 2 }}>
          <ListItem>
            💼 Understand the different types of investments and their risks and
            rewards
          </ListItem>
          <ListItem>
            🏛️ Learn about the role of the stock market and how it works
          </ListItem>
          <ListItem>
            📊 Understand how to create a diversified investment portfolio
          </ListItem>
          <ListItem>
            📈 Learn about common investing strategies and how to apply them
          </ListItem>

          <ListItem>🔬 Learn how to research and evaluate investments</ListItem>
          <ListItem>
            🎯 Understand the importance of financial planning and goal setting
          </ListItem>
        </List>
      </Box>
    </HomePageSection>
  );
};

export default Syllabus;
