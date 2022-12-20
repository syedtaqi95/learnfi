import { Box, Container, Heading, useStyleConfig } from "@chakra-ui/react"

const HomePage = (props: { variant?: string, children?: any }) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("HomePage", { variant });

  return (
    <Box __css={styles} {...rest}>
      <Heading>LearnFi</Heading>
      <Container>
        A web-based learning platform that helps beginners learn the basics of investing.
        <br />
        Learn how to build a portfolio, analyse assets and more.
      </Container>
      <Container>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus accusantium assumenda tempora in aliquam ullam culpa quis quae similique praesentium laboriosam quas nobis voluptates, consectetur harum! Aliquid velit nobis eos?
      </Container>
    </Box>
  )
}

export default HomePage