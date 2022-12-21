import { Text, useColorModeValue } from "@chakra-ui/react";
import Typed from "react-typed";

const Brand = ({ variant }: { variant?: "dynamic" }) => {
  const firstSectionColor = useColorModeValue("green.400", "white");
  const secondSectionColor = useColorModeValue("black", "green.400");

  // Dynamic variant with typewriter effect
  if (variant === "dynamic") {
    return (
      <>
        <Text as="span" color={firstSectionColor}>
          Learn{" "}
        </Text>
        <Text as="span" display={{ base: "inline", lg: "none" }}>
          <br />
        </Text>
        <Text as="span" color={secondSectionColor}>
          <Typed
            strings={["Finance.", "Investing.", "Stocks."]}
            typeSpeed={100}
            backSpeed={100}
            backDelay={2000}
            loop
          />
        </Text>
      </>
    );
  } else {
    // Static variant
    return (
      <>
        <Text as="span" color={firstSectionColor}>
          Learn
        </Text>
        <Text as="span" color={secondSectionColor}>
          Fi
        </Text>
      </>
    );
  }
};

export default Brand;
