import Hero from "@/components/Hero";
import { Box, useStyleConfig } from "@chakra-ui/react";

const HomePage = (props: { variant?: string; children?: any }) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("HomePage", { variant });

  return (
    <Box __css={styles} {...rest}>
      <Hero />
    </Box>
  );
};

export default HomePage;
