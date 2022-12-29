import { useRouteError } from "react-router-dom";
import { Container, Heading, Text } from "@chakra-ui/react";
import HomePageSection from "@/components/HomePageSection";
import Navbar from "@/components/Navbar";

type RouteError = {
  statusText?: string;
  message?: string;
};

const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <>
      <Navbar />
      <Container as="main" maxW={{ base: "90vw", lg: "80vw" }}>
        <HomePageSection>
          <Heading>Oops!</Heading>
          <Text>Sorry, an unexpected error has occurred.</Text>
          <p>
            <i>{error?.statusText || error?.message || "Unknown Error"}</i>
          </p>
        </HomePageSection>
      </Container>
    </>
  );
};

export default ErrorPage;
