import React from "react";
import HomePageSection from "@/components/HomePageSection";
import { Heading } from "@chakra-ui/react";
import TextBox from "@/components/TextBox";
const Contact = () => {
  return (
    <HomePageSection variant="section">
      <Heading as="h2" textStyle={"section_heading"}>
        ✉️ Get in touch
      </Heading>

      <TextBox>
        Thank you for visiting our website! We are always happy to hear from our
        visitors and welcome any feedback, questions, or comments you may have.
        Please don't hesitate to reach out. You can contact us using one of the
        options below.
      </TextBox>
    </HomePageSection>
  );
};

export default Contact;
