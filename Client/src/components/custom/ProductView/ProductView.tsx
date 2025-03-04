import {
  Grid,
  GridItem,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "@/components/ui/radio-card";

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

const ProductView = () => {
  return (
    <Grid h="200px" templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem rowSpan={1} colSpan={3}>
        <Box background="tomato" width="100%" padding="4" color="white">
          This is the Box 1
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
