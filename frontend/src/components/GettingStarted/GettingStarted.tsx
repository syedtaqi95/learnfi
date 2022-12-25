import {
  Heading,
  Text,
  Card,
  SimpleGrid,
  CardBody,
  useColorModeValue,
} from "@chakra-ui/react";
import HomePageSection from "@/components/HomePageSection";
import TextBox from "@/components/TextBox";

const GettingStarted = () => {
  const cardStyles = {
    boxShadow: `0 0 14px var(--chakra-colors-${useColorModeValue(
      "gray-500",
      "green-400"
    )})`,
    fontSize: { base: "20px", md: "28px" },
  };

  const textBoxStyles = { textAlign: "start", textStyle: "paragraph" };

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
          <CardBody>
            <Text>1 Create an account</Text>
            <TextBox styles={textBoxStyles}>
              Sign up using a username and password or your email address
            </TextBox>
          </CardBody>
        </Card>
        <Card {...cardStyles}>
          <CardBody>
            <Text>2 Explore the topics</Text>
            <TextBox styles={textBoxStyles}>
              Work through the sections at your own pace
            </TextBox>
          </CardBody>
        </Card>
        <Card {...cardStyles}>
          <CardBody>
            <Text>3 Apply your learning</Text>
            <TextBox styles={textBoxStyles}>
              Use our platform to apply what you have learned to your investing
              endeavours
            </TextBox>
          </CardBody>
        </Card>
      </SimpleGrid>
    </HomePageSection>
  );
};

export default GettingStarted;
