import { Flex } from '@chakra-ui/react';
import { TradingViewChart } from '../components/TradingViewChart';

import { Header } from '../components/Header';
import { HeaderPairs } from '../components/HeaderPairs';
import { MarketPairs } from '../components/MarketPairs';
import { OrderBook } from '../components/OrderBook';
import { WalletSpot } from '../components/WalletSpot';

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex
        width="100%"
        marginX="auto"
        marginTop="4"
        paddingX="6"
        maxWidth={1520}
      >
        <Flex
          direction="column"
          width="100%"
          maxWidth={1110}
          borderWidth={1}
          borderColor="gray.700"
        >
          <HeaderPairs />
          <Flex width="100%">
            <OrderBook />
            <Flex width="100%" direction="column">
              <TradingViewChart />
              <WalletSpot />
            </Flex>
          </Flex>
        </Flex>
        <MarketPairs />
      </Flex>
    </Flex>
  );
}
