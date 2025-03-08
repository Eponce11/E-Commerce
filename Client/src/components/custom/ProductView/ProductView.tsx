import {
  Grid,
  GridItem,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  For,
  Flex,
} from "@chakra-ui/react";
import { RadioCardItem, RadioCardRoot } from "@/components/ui/radio-card";

import Test1 from "../../../common/imgs/test1.jpg";
import Test2 from "../../../common/imgs/test2.jpg";
import Test3 from "../../../common/imgs/test3.jpg";
import Test4 from "../../../common/imgs/test4.jpg";

const productImages = [Test1, Test2, Test3, Test4];

const items = [
  { value: "next", title: "Next.js" },
  { value: "vite", title: "Vite" },
  { value: "node", title: "Node" },
  { value: "c#", title: ".NET" },
];

const ProductSizeRadioCards = () => {
  return (
    <RadioCardRoot>
      <Grid templateColumns="repeat(2, 1fr)" gap="3">
        {items.map((item) => (
          <GridItem>
            <RadioCardItem
              label={item.title}
              key={item.value}
              value={item.value}
            />
          </GridItem>
        ))}
      </Grid>
    </RadioCardRoot>
  );
};

const ProductDescription = () => {
  return (
    <Stack>
      <Heading size="3xl">Hello World</Heading>
      <Text>$120</Text>
    </Stack>
  );
};

const ProductAddButtons = () => {
  return (
    <Stack>
      <Button variant="solid">Buy now</Button>
      <Button variant="ghost">Add to cart</Button>
    </Stack>
  );
};

const ProductImages = () => {
  return (
    <Stack>
      <Image src={Test1} height={500} fit="cover" />
      <Flex gap={3} justifyContent="center">
        <For each={productImages}>
          {(productImg, index) => (
            <Image src={productImg} height={50} width={50} />
          )}
        </For>
      </Flex>
    </Stack>
  );
};

const ProductView = () => {
  return (
    <Grid h="200px" templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem rowSpan={1} colSpan={3}>
        <Box background="tomato" width="100%" padding="4" color="white">
          <ProductImages />
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <ProductDescription />
        <ProductSizeRadioCards />
        <ProductAddButtons />
      </GridItem>
    </Grid>
  );
};

export default ProductView;
