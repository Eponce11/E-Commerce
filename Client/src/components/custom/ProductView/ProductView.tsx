import { Grid, GridItem, Box, HStack } from "@chakra-ui/react";
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

const ItemSizeRadioCards = () => {
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

const ProductView = () => {
  return (
    <Grid h="200px" templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem rowSpan={1} colSpan={3}>
        <Box background="tomato" width="100%" padding="4" color="white">
          This is the Box 1
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <ItemSizeRadioCards />
      </GridItem>
      <GridItem colSpan={2}>
        <Box background="tomato" width="100%" padding="4" color="white">
          This is the Box 3
        </Box>
      </GridItem>
      <GridItem colSpan={4}>
        <Box background="tomato" width="100%" padding="4" color="white">
          This is the Box 4
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ProductView;
