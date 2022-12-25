import React from "react";
import HomePageSection from "@/components/HomePageSection";
import { Heading } from "@chakra-ui/react";
const Contact = () => {
  return (
    <HomePageSection variant="section">
      <Heading as="h2" textStyle={"section_heading"}>
        Get in touch!
      </Heading>
    </HomePageSection>
  );
};

export default Contact;
