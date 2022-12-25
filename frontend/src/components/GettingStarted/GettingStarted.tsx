import {
  Heading,
  Card,
  SimpleGrid,
  CardBody,
  useColorModeValue,
  CardHeader,
} from "@chakra-ui/react";
import HomePageSection from "@/components/HomePageSection";

const GettingStarted = () => {
  const cardStyles = {
    fontSize: { base: "20px", md: "28px" },
    bg: useColorModeValue("green.500", "green.400"),
  };

  const cardHeaderStyles = {
    fontWeight: "semibold",
    color: useColorModeValue("white", "gray.800"),
  };

  const cardBodyStyles = {
    align: "start",
    fontSize: { base: "16px", md: "20px" },
    color: useColorModeValue("white", "gray.800"),
  };

  return (
    <HomePageSection variant="section">
      <Heading as="h2" textStyle={"section_heading"}>
        Getting Started
      </Heading>

      {/* Cards */}
      <SimpleGrid
        pt={{ base: 2, md: 8 }}
        spacing={8}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        maxW="100%"
      >
        <Card {...cardStyles}>
          <CardHeader {...cardHeaderStyles}>1 Create an account</CardHeader>
          <CardBody {...cardBodyStyles}>
            Sign up using a username and password or your email address
          </CardBody>
        </Card>

        <Card {...cardStyles}>
          <CardHeader {...cardHeaderStyles}>2 Explore the topics</CardHeader>
          <CardBody {...cardBodyStyles}>
            Work through the sections at your own pace
          </CardBody>
        </Card>

        <Card {...cardStyles}>
          <CardHeader {...cardHeaderStyles}>3 Apply your learning</CardHeader>
          <CardBody {...cardBodyStyles}>
            Use our platform to apply what you have learned
          </CardBody>
        </Card>
      </SimpleGrid>
    </HomePageSection>
  );
};

export default GettingStarted;
