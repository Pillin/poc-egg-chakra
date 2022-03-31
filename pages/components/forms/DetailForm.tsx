import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import Select from "../core/Select";
import CheckBox from "../core/CheckBox";
import Input from "../core/Input";
import Button from "../core/Button";

const DetailForm = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 }) || 1;
  return (
    <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full" h="full">
      <Input colspan={colSpan} placeholder="John" label="First Name" />
      <Input colspan={colSpan} placeholder="Doe" label="Last Name" />
      <Input colspan={2} placeholder="Blvd. Broken Dreams" label="Address" />
      <Input colspan={colSpan} placeholder="San Francisco" label="City" />
      <Select colspan={colSpan} label="Country" options={[]} />
      <CheckBox
        colspan={colSpan}
        defaultChecked
        label="Ship to Billing Address"
      />
      <Button colspan={2} label="Place Order" />
    </SimpleGrid>
  );
};

export default DetailForm;
