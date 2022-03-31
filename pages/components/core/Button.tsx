import { GridItem, Button } from "@chakra-ui/react";

const InputComponent = (props: { colspan: number; label: string }) => {
  return (
    <GridItem colSpan={props.colspan}>
      <Button colorScheme="brand" size="lg" w="full">
        {props.label}
      </Button>
    </GridItem>
  );
};

export default InputComponent;
