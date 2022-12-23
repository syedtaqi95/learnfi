import { VStack } from "@chakra-ui/react";

const HomePageSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <VStack as="section" pt="48px" pb="32px">
      {children}
    </VStack>
  );
};

export default HomePageSection;
