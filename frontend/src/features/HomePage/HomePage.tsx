import Hero from "@/components/Hero";
import { Container, Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container as="main" maxW={{base:"85vw", lg:"958px"}}>
      <Hero />
    </Container>
  );
};

export default HomePage;
