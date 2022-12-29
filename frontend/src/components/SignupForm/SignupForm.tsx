import { Form, useActionData } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { ActionFunction, redirect } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

// Action triggered when on submitting form
export const action: ActionFunction = async ({ request }) => {
  // Retrieve form fields
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const errors: { email?: string; password?: string } = {};

  // Validate the fields
  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "Enter a valid email address";
  }

  if (typeof password !== "string" || password.length < 6) {
    errors.password = "Password must be greater than 6 characters";
  }

  // Return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }

  // Redirect to home page
  return redirect("/");
};

const SignupForm = () => {
  // Password show/hide button
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordButton = () => setShowPassword(!showPassword);

  const errors = useActionData() as { email?: string; password?: string };

  // Form field styles
  const formControlStyles = {
    mb: "16px",
  };

  return (
    <>
      <Form method="post">
        {/* Email address */}
        <FormControl {...formControlStyles}>
          <Input
            autoFocus
            isRequired
            borderColor={useColorModeValue("gray.500", "gray.400")}
            type="email"
            name="email"
            placeholder="Email"
          />
          {errors?.email ? (
            <FormHelperText>{errors.email}</FormHelperText>
          ) : null}
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
          {errors?.password && (
            <FormHelperText color="red">{errors.password}</FormHelperText>
          )}
        </FormControl>

        {/* Submit button */}
        <Button variant="smallButton" type="submit" w="100%">
          Submit
        </Button>
      </Form>

      <Text>or</Text>

      <Button leftIcon={<FcGoogle />} variant="smallButton" w="100%">
        Continue with Google
      </Button>
    </>
  );
};

export default SignupForm;
