import { Flex, Box, Input, Float, Circle, Separator } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { LuSearch, LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <Flex gap="4" padding="4" align="center">
        <Box background="tomato" width="80px" height="60px"></Box>
        <InputGroup flex="1" startElement={<LuSearch />}>
          <Input placeholder="Username" variant="subtle" />
        </InputGroup>
        <Box position="relative" w="30px" h="30px">
          <LuShoppingCart size="30px" />
          <Float>
            <Circle size="5" bg="red" color="white">
              3
            </Circle>
          </Float>
        </Box>
      </Flex>
      <Separator />
    </>
  );
};

export default Navbar;
