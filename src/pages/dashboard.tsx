import { Flex } from '@chakra-ui/react';
import { GraficTrade } from '../components/GraficTrade';

import { Header } from '../components/Header';
import { HeaderPairs } from '../components/HeaderPairs';
import { MarketPairs } from '../components/MarketPairs';
import { OrderBook } from '../components/OrderBook';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex
        width="100%"
        marginX="auto"
        marginTop="4"
        paddingX="6"
        maxWidth={1480}
      >
        <Flex
          direction="column"
          width="100%"
          maxWidth={1110}
          borderWidth={1}
          borderColor="gray.700"
        >
          <HeaderPairs />
          <Flex w="100%">
            <OrderBook />
            <GraficTrade />
          </Flex>
        </Flex>
        <MarketPairs />
      </Flex>
    </Flex>
  );
}
