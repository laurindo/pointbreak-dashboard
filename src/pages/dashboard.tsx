import { Box, Flex, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { HeaderPairs } from '../components/HeaderPairs';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Grid
        width="100%"
        maxWidth={1480}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        my="6"
        mx="auto"
        px="6"
      >
        <HeaderPairs />
        <GridItem
          w="100%"
          h="20"
          bg="gray.800"
          colSpan={1}
          rowSpan={2}
          borderColor="gray.700"
          borderWidth="1px"
        >
          Teste
        </GridItem>
        <GridItem
          w="100%"
          h="10"
          bg="gray.800"
          colSpan={1}
          borderColor="gray.700"
          borderWidth="1px"
        ></GridItem>
        <GridItem
          w="100%"
          h="10"
          bg="gray.800"
          colSpan={2}
          borderColor="gray.700"
          borderWidth="1px"
        ></GridItem>
      </Grid>
    </Flex>
  );
}
