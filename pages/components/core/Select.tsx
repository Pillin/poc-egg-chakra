import { GridItem, FormControl, FormLabel, Select } from "@chakra-ui/react";
interface Option {
  name: string;
  value: string;
}
const SelectComponent = (props: {
  colspan: number;
  label: string;
  options: Option[];
}) => {
  return (
    <GridItem colSpan={props.colspan}>
      <FormControl>
        <FormLabel>{props.label}</FormLabel>
        <Select>
          {props.options.map(({ name, value }, index) => (
            <option value={value}>{name}</option>
          ))}
        </Select>
      </FormControl>
    </GridItem>
  );
};

export default SelectComponent;
