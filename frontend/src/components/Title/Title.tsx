import { Heading, Container, useColorModeValue } from "@chakra-ui/react";
import Brand from "@/components/Brand";

const Title = () => {
  return (
    <>
       {/* Main heading */}
      <Heading
        as="h1"
        fontSize={{
          base: "15vw",
          md: "9xl",
        }}
      >
        <Brand />
      </Heading>
      {/* Title description */}
      <Container
        textAlign={"center"}
        maxW="66vw"
        color={useColorModeValue("gray.500", "gray.400")}
      >
        LearnFi is a web-based platform that teaches beginners the basics of
        investing using a "learn-by-doing" approach. Take control of your
        financial future and start investing like a pro. Sign up today and start
        building a solid foundation for your financial success!
      </Container>
    </>
  );
};

export default Title;
