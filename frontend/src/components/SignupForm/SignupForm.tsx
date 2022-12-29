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
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignupForm = () => {
  // Form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Password show/hide button
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordButton = () => setShowPassword(!showPassword);

  // Submit button loading state
  const [loading, setLoading] = useState(false);

  // Form validation errors
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  // React-router navigation hook
  const navigate = useNavigate();

  // Form field styles
  const formControlStyles = {
    mb: "16px",
  };

  // Submit event handler
  const handleSignup: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // Set submit button to loading state
    setLoading(true);

    // Validate the fields
    const _errors: { email?: string; password?: string } = {};
    if (typeof email !== "string" || !email.includes("@")) {
      _errors.email = "Enter a valid email address";
    }

    if (typeof password !== "string" || password.length < 6) {
      _errors.password = "Password must be greater than 6 characters";
    }

    setErrors(_errors);

    // Disable submit button loading state
    setLoading(false);

    // Redirect to home page if no errors
    if (Object.keys(_errors).length === 0) {
      navigate("/");
    }
  };

  return (
    <>
      <form method="post" onSubmit={handleSignup}>
        {/* Email address */}
        <FormControl
          {...formControlStyles}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        >
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
        <FormControl
          {...formControlStyles}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        >
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
        <Button
          variant="smallButton"
          type="submit"
          w="100%"
          isLoading={loading}
          loadingText="Submitting..."
        >
          Submit
        </Button>
      </form>

      <Text>or</Text>

      <Button leftIcon={<FcGoogle />} variant="smallButton" w="100%">
        Continue with Google
      </Button>
    </>
  );
};

export default SignupForm;
