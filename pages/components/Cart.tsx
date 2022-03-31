import {
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  AspectRatio,
  Image,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>If the price s too hard on your eyes</Text>
        <Button variant="link" colorScheme="black" onClick={toggleColorMode}>
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
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </HStack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size="lg">$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
