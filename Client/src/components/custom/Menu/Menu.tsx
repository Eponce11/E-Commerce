import { Flex, For, Text } from "@chakra-ui/react";

const menuItems = new Array(5).fill("Item");

const Menu = () => {
  return (
    <Flex padding="4" gap="8" justify="center">
      <For each={menuItems}>{(item, index) => <Text>{item}</Text>}</For>
    </Flex>
  );
};

export default Menu;
