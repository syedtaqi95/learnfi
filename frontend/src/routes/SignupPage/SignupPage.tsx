import Navbar from "@/components/Navbar";
import { Button, Container, Text, Heading, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
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

          <Text>or</Text>

          <Button leftIcon={<FcGoogle />} variant="smallButton" w="100%">
            Continue with Google
          </Button>
        </VStack>
      </Container>
    </>
  );
};

export default SignupPage;
