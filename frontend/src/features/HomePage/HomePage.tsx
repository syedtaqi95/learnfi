import Hero from "@/components/Hero";
import { Container, Divider } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container as="main" maxW={{base:"85vw", lg:"958px"}}>
      <Hero />
      <Divider />
    </Container>
  );
};

export default HomePage;
