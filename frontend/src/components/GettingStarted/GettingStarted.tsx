import {
  Heading,
  Card,
  SimpleGrid,
  CardBody,
  useColorModeValue,
  CardHeader,
  Image,
} from "@chakra-ui/react";
import HomePageSection from "@/components/HomePageSection";

const GettingStarted = () => {
  const cardStyles = {
    fontSize: { base: "20px", md: "28px" },
    bg: useColorModeValue("gray.200", "gray.700"),
    borderRadius: "10px",
    maxW: "300px",
    boxShadow: `0 0 20px var(--chakra-colors-${useColorModeValue(
      "gray-400",
      "black"
    )})`,
  };

  const imageStyles = {
    borderTopRadius: "10px",
  };

  const cardHeaderStyles = {
    fontWeight: "medium",
    color: useColorModeValue("gray.800", "gray.50"),
  };

  const cardBodyStyles = {
    align: "start",
    fontSize: { base: "16px", md: "20px" },
    color: useColorModeValue("gray.500", "gray.400"),
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
          <Image {...imageStyles} src="/signup.jpg" alt="Laptop on desk" />
          <CardHeader {...cardHeaderStyles}>1 Create an account</CardHeader>
          <CardBody {...cardBodyStyles}>
            Sign up using a username and password or your email address
          </CardBody>
        </Card>

        <Card {...cardStyles}>
          <Image {...imageStyles} src="/explore.jpg" alt="Whiteboard" />
          <CardHeader {...cardHeaderStyles}>2 Explore the topics</CardHeader>
          <CardBody {...cardBodyStyles}>
            Work through the sections at your own pace
          </CardBody>
        </Card>

        <Card {...cardStyles}>
          <Image {...imageStyles} src="/stock-chart.jpg" alt="Stock chart" />
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
