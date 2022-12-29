import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Form } from "react-router-dom";
import {
  Button,
  Container,
  Text,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  // Password show/hide button
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordButton = () => setShowPassword(!showPassword);

  // Loading state
  const [isLoading, setLoading] = useState(false);

  // Form field styles
  const formControlStyles = {
    mb: "16px",
  };

  return (
    <>
      <Navbar />
      <Container as="main" centerContent maxW={{ base: "90vw", lg: "80vw" }}>
        <VStack>
          <Heading as="h2" mt={{ base: "100px", md: "15vh" }} mb="24px">
            Sign up
          </Heading>

          <Form method="post" action="/events">
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
              <InputGroup>
                <Input
                  pr="74px"
                  isRequired
                  borderColor={useColorModeValue("gray.500", "gray.400")}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                <InputRightElement width="72px">
                  <Button
                    w="95%"
                    h="90%"
                    borderLeftRadius="0"
                    borderRightRadius="4px"
                    bg={useColorModeValue("gray.200", "gray.700")}
                    _hover={{ bg: useColorModeValue("gray.300", "gray.600") }}
                    _active={{ bg: useColorModeValue("gray.400", "gray.500") }}
                    fontSize={"14px"}
                    onClick={handlePasswordButton}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {/* Submit button */}
            <Button
              variant="smallButton"
              type="submit"
              w="100%"
              loadingText="Submitting..."
              isLoading={isLoading}
            >
              Submit
            </Button>
          </Form>

          <Text>or</Text>

          <Button leftIcon={<FcGoogle />} variant="smallButton" w="100%">
            Continue with Google
          </Button>
        </VStack>
      </Container>
    </>
  );
};

export default LoginPage;
