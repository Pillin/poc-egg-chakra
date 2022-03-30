import type { NextPage } from "next";
import { Container, Flex } from "@chakra-ui/react";
import Cart from "./components/Cart";
import Details from "./components/Details";

const Home: NextPage = () => {
  return (
    <Container maxWidth="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Home;
