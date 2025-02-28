import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { CardItem } from "../index";

const DisplayGrid = () => {
  return (
    <SimpleGrid minChildWidth="64" gap="6" padding="6">
      <GridItem>
        <CardItem />
      </GridItem>
      <GridItem>
        <CardItem />
      </GridItem>
      <GridItem>
        <CardItem />
      </GridItem>
      <GridItem>
        <CardItem />
      </GridItem>
      <GridItem>
        <CardItem />
      </GridItem>
    </SimpleGrid>
  );
};

export default DisplayGrid;
