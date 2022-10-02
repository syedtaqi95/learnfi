import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

function PortfolioDashboardApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default PortfolioDashboardApp;
