import React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Brand from "../Brand";

const Hero = () => {
  return (
    <VStack mt={{base: "15vw", md: 28}}>
      {/* Main heading */}
      <Heading as="h1" fontSize={{ base: "15vw", md: "9xl" }}>
        <Brand />
      </Heading>

      {/* Title description */}
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
    </VStack>
  );
};

export default Hero;
