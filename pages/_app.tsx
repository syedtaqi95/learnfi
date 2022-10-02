import { ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";

function PortfolioDashboardApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default PortfolioDashboardApp;
