import { Heading, Flex, Card, CardHeader } from "@chakra-ui/react";
import HomePageSection from "@/components/HomePageSection";
import TextBox from "@/components/TextBox";

const GettingStarted = () => {
  return (
    <HomePageSection variant="section">
      <Heading as="h2" textStyle={"section_heading"}>
        Getting Started
      </Heading>

      {/* Cards */}
      <Flex
        pt={"40px"}
        w="100%"
        direction={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        gap={4}
        gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Heading size="md">
              Step 1
            </Heading>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Step 2</Heading>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Step 3</Heading>
          </CardHeader>
        </Card>
      </Flex>
    </HomePageSection>
  );
};

export default GettingStarted;
