import Hero from "@/components/Hero";
import Syllabus from "@/components/Syllabus";
import GettingStarted from "@/components/GettingStarted";
import Footer from "@/components/Footer";
import { Container, Divider } from "@chakra-ui/react";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <Container as="main" maxW={{ base: "85vw", lg: "958px" }}>
      <Hero />
      <Divider />
      <Syllabus />
      <GettingStarted />
      <Contact />
      <Divider />
      <Footer />
    </Container>
  );
};

export default HomePage;
