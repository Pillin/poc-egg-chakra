import type { NextPage } from "next";
import { Container, Flex } from "@chakra-ui/react";
import Cart from "./components/Cart";
import Details from "./components/Details";

const Home: NextPage = () => {
  return (
    <Container maxWidth="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Home;
