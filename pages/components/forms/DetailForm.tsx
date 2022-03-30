import { SimpleGrid } from "@chakra-ui/react";
import Select from "../core/Select";
import CheckBox from "../core/CheckBox";
import Input from "../core/Input";
import Button from "../core/Button";

const DetailForm = () => {
  return (
    <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full" h="full">
      <Input colspan={1} placeholder="John" label="First Name" />
      <Input colspan={1} placeholder="Doe" label="Last Name" />
      <Input colspan={2} placeholder="Blvd. Broken Dreams" label="Address" />
      <Input colspan={1} placeholder="San Francisco" label="City" />
      <Select colspan={1} label="Country" options={[]} />
      <CheckBox colspan={1} defaultChecked label="Ship to Billing Address" />
      <Button colspan={2} label="Place Order" />
    </SimpleGrid>
  );
};

export default DetailForm;
