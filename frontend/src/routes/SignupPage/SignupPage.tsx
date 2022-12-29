import Navbar from "@/components/Navbar";
import { Container, Heading, VStack } from "@chakra-ui/react";
import SignupForm from "@/components/SignupForm";

const SignupPage = () => {
  return (
    <>
      <Navbar />
      <Container as="main" centerContent maxW={{ base: "90vw", lg: "80vw" }}>
        <VStack>
          <Heading as="h2" mt={{ base: "100px", md: "15vh" }} mb="24px">
            Sign up
          </Heading>

          <SignupForm />
        </VStack>
      </Container>
    </>
  );
};

export default SignupPage;
