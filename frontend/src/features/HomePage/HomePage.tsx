import { Box, Container, Heading, useStyleConfig } from "@chakra-ui/react";

const HomePage = (props: { variant?: string; children?: any }) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("HomePage", { variant });

  return (
    <Box __css={styles} {...rest}>
      <Heading>LearnFi</Heading>
      <Container>
        A web-based learning platform that helps beginners learn the basics of
        investing.
        <br />
        Learn how to build a portfolio, analyse assets and more.
      </Container>
      <Container>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
        accusantium assumenda tempora in aliquam ullam culpa quis quae similique
        praesentium laboriosam quas nobis voluptates, consectetur harum! Aliquid
        velit nobis eos? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Expedita, ullam vero ducimus animi, tempore impedit dolorum
        quaerat minus provident laboriosam quod natus similique minima unde
        incidunt? Voluptas ea doloremque possimus! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eaque ipsam, ipsum similique repellendus
        odit officiis dignissimos velit ducimus sit dicta repellat fuga optio
        quo debitis quibusdam nobis fugit! Tenetur, adipisci. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Delectus accusantium assumenda
        tempora in aliquam ullam culpa quis quae similique praesentium
        laboriosam quas nobis voluptates, consectetur harum! Aliquid velit nobis
        eos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        ullam vero ducimus animi, tempore impedit dolorum quaerat minus
        provident laboriosam quod natus similique minima unde incidunt? Voluptas
        ea doloremque possimus! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eaque ipsam, ipsum similique repellendus odit officiis
        dignissimos velit ducimus sit dicta repellat fuga optio quo debitis
        quibusdam nobis fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Delectus accusantium assumenda tempora in
        aliquam ullam culpa quis quae similique praesentium laboriosam quas
        nobis voluptates, consectetur harum! Aliquid velit nobis eos? Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Delectus accusantium assumenda tempora in aliquam
        ullam culpa quis quae similique praesentium laboriosam quas nobis
        voluptates, consectetur harum! Aliquid velit nobis eos? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, ullam vero
        ducimus animi, tempore impedit dolorum quaerat minus provident
        laboriosam quod natus similique minima unde incidunt? Voluptas ea
        doloremque possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque ipsam, ipsum similique repellendus odit officiis dignissimos
        velit ducimus sit dicta repellat fuga optio quo debitis quibusdam nobis
        fugit! Tenetur, adipisci.
      </Container>
    </Box>
  );
};

export default HomePage;
