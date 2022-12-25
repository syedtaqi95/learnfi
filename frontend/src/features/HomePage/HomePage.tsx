import Hero from "@/components/Hero";
import Syllabus from "@/components/Syllabus";
import GettingStarted from "@/components/GettingStarted";
import Footer from "@/components/Footer";
import { Container, Divider } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container as="main" maxW={{ base: "85vw", lg: "958px" }}>
      <Hero />
      <Divider />
      <Syllabus />
      <GettingStarted />
      <Divider />
      <Footer />
    </Container>
  );
};

export default HomePage;
