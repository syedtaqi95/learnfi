import Navbar from "@/components/Navbar";
import { Form } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const LoginPage = () => {
  const formControlStyles = {
    mb: "16px",
  };

  return (
    <>
      <Navbar />
      <Container
        as="main"
        textAlign="center"
        maxW={{ base: "90vw", lg: "80vw" }}
      >
        <VStack>
          <Heading as="h2" mt={{ base: "100px", md: "15vh" }} mb="24px">
            Sign up
          </Heading>

          <Form
            style={{ width: "100%", maxWidth: "300px" }}
            method="post"
            action="/events"
          >
            {/* Email address */}
            <FormControl {...formControlStyles}>
              <Input
                isRequired
                borderColor={useColorModeValue("gray.500", "gray.400")}
                type="email"
                name="email"
                placeholder="Email"
              />
            </FormControl>

            {/* Password */}
            <FormControl {...formControlStyles}>
              <Input
                isRequired
                borderColor={useColorModeValue("gray.500", "gray.400")}
                type="password"
                name="password"
                placeholder="Password"
              />
            </FormControl>

            {/* Submit button */}
            <Button
              type="submit"
              w="100%"
              bg={useColorModeValue("gray.200", "gray.700")}
              _hover={{bg: useColorModeValue("gray.300", "gray.600")}}
              loadingText="Submitting..."
              isDisabled={true}
            >
              Submit
            </Button>
          </Form>
        </VStack>
      </Container>
    </>
  );
};

export default LoginPage;
