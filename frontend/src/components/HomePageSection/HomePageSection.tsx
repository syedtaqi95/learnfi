import { VStack } from "@chakra-ui/react";

interface PropTypes {
  variant?: "hero" | "section";
  children: React.ReactNode;
}

const HomePageSection = ({ variant = "section", children }: PropTypes) => {
  if (variant === "hero") {
    return (
      <VStack as="section" mt={{ base: "40px", md: 36 }} pb="80px">
        {children}
      </VStack>
    );
  } else {
    return (
      <VStack as="section" pt="48px" pb="32px">
        {children}
      </VStack>
    );
  }
};

export default HomePageSection;
