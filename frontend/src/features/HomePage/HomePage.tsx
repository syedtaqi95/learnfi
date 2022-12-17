import { Box, Container, Heading, useStyleConfig } from "@chakra-ui/react"

const HomePage = (props: { variant?: string, children?: any }) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("HomePage", { variant });

  return (
    <Box __css={styles} {...rest}>
      <Heading>build-a-portfolio</Heading>
      <Container>
        An open-source web app that helps beginners learn the basics of investing.
        <br />
        Learn how to build a portfolio, analyse assets and more.
      </Container>
    </Box>
  )
}

export default HomePage