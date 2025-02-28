import {
  Flex,
  Grid,
  GridItem,
  Box,
  Image,
  For,
  Text,
  Input,
} from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <Flex gap="4" padding="4">
      <Box background="tomato" width="80px" height="60px"></Box>
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input placeholder="Username" variant="subtle" />
      </InputGroup>
    </Flex>
  );
};

export default Navbar;
