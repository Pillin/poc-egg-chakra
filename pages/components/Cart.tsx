import {
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  AspectRatio,
  Stack,
  Image
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg="gray.50"
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>If the price s too hard on your eyes</Text>
        <Button variant="link" colorScheme="black">
          try changing the theme
        </Button>
      </VStack>
      <HStack spacing={6} w="full" alignItems="center">
        <AspectRatio ratio={1} w={24}>
          <Image src={"/images/skateboard.jpg"} alt="" />
        </AspectRatio>
        <HStack
          spacing={0}
          w="full"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack>
            <Heading size="md">Penny Board</Heading>
            <Text color="gray.600">PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </HStack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color="gray.600">Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Shipping</Text>
          <Heading size="sm">$19.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.600">Total</Text>
          <Heading size="lg">$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
