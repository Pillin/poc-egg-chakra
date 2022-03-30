import { GridItem, Checkbox } from "@chakra-ui/react";

const CheckBoxComponent = (props: {
  colspan: number;
  label: string;
  defaultChecked: boolean;
}) => {
  return (
    <GridItem colSpan={props.colspan}>
      <Checkbox defaultChecked={props.defaultChecked} />
      {props.label}
    </GridItem>
  );
};

export default CheckBoxComponent;
