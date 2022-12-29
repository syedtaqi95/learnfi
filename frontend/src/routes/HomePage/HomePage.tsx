import Hero from "@/components/Hero";
import Syllabus from "@/components/Syllabus";
import GettingStarted from "@/components/GettingStarted";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Container, Divider } from "@chakra-ui/react";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container as="main" maxW={{ base: "90vw", lg: "80vw" }}>
        <Hero />
        <Divider />
        <GettingStarted />
        <Syllabus />
        <Contact />
        <Divider />
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
