import React from "react";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Layout