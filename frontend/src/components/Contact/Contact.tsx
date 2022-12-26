import HomePageSection from "@/components/HomePageSection";
import { Button, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TextBox from "@/components/TextBox";

const Contact = () => {
  const commonButtonStyles = {
    as: "a" as any,
    variant: "solid",
    w: { base: "100%", md: "150px" },
    h: "50px",
    fontWeight: "medium",
    fontSize: { base: "16px", md: "20px" },
    color: useColorModeValue("gray.800", "gray.50"),
    bg: useColorModeValue("gray.200", "gray.700"),
    _hover: { bg: useColorModeValue("gray.300", "gray.600") },
  };

  return (
    <HomePageSection variant="section">
      <Heading as="h2" textStyle={"section_heading"}>
        Get in touch
      </Heading>

      <TextBox>
        Thank you for visiting LearnFi! We are always happy to hear from our
        visitors and welcome any feedback, questions, or comments you may have.
        You can contact us using one of the options below.
      </TextBox>

      <Flex
        pt={"40px"}
        w="100%"
        direction={{ base: "column", md: "row" }}
        justifyContent={"center"}
        gap={4}
      >
        <Button
          {...commonButtonStyles}
          href="mailto:syed.taqi95@gmail.com"
          leftIcon={<MdOutlineMail />}
        >
          Email
        </Button>

        <Button
          {...commonButtonStyles}
          href="https://github.com/syedtaqi95/learnfi"
          target="_blank"
          leftIcon={<FaGithub />}
        >
          GitHub
        </Button>

        <Button
          {...commonButtonStyles}
          href="https://www.linkedin.com/in/syedtaqi-haider/"
          target="_blank"
          leftIcon={<FaLinkedin />}
        >
          LinkedIn
        </Button>
      </Flex>
    </HomePageSection>
  );
};

export default Contact;
