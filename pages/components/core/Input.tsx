import { GridItem, FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputComponent = (props: {
  colspan: number;
  placeholder: string;
  label: string;
}) => {
  return (
    <GridItem colSpan={props.colspan}>
      <FormControl>
        <FormLabel>{props.label}</FormLabel>
        <Input placeholder={props.placeholder} />
      </FormControl>
    </GridItem>
  );
};

export default InputComponent;
