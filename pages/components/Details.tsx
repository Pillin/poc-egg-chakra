import { VStack, Heading, Text } from "@chakra-ui/react";

import DetailForm from "./forms/DetailForm";

const Details = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <DetailForm />
    </VStack>
  );
};

export default Details;
