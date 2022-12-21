import { Text, useColorModeValue } from "@chakra-ui/react";
import Typed from "react-typed";

const Brand = ({ variant }: { variant?: "dynamic" }) => {
  if (variant === "dynamic") {
    return (
      <>
        <Text as="span" color={useColorModeValue("green.400", "white")}>
          Learn{" "}
        </Text>
        <Text as="span" color={useColorModeValue("black", "green.400")}>
          <Typed
            strings={["Finance", "Investing", "Stocks"]}
            typeSpeed={100}
            backSpeed={100}
            backDelay={2000}
            loop
          />
        </Text>
      </>
    );
  } else {
    return (
      <>
        <Text as="span" color={useColorModeValue("green.400", "white")}>
          Learn
        </Text>
        <Text as="span" color={useColorModeValue("black", "green.400")}>
          Fi
        </Text>
      </>
    );
  }
};

export default Brand;
