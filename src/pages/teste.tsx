import { Box, Flex, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { HeaderPairs } from '../components/HeaderPairs';
import { MarketPairs } from '../components/MarketPairs';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex
        w="100%"
        mx="auto"
        mt="4"
        px="6"
        // align="center"
        maxWidth={1480}
        borderWidth={1}
        borderColor="gray.700"
      >
        <Flex
          direction="column"
          w="100%"
          maxWidth={1110}
          borderWidth={1}
          borderColor="gray.700"
        >
          <Flex w="100%" borderWidth={1} borderColor="gray.700">
            BTC/USDT <br />
            BTC/USDT <br />
            BTC/USDT <br />
          </Flex>
          <Flex w="100%" borderWidth={1} borderColor="gray.700">
            <Flex
              w="100%"
              maxWidth={370}
              borderWidth={1}
              borderColor="gray.700"
            >
              Order Book <br />
              Order Book <br />
              Order Book <br />
              Order Book <br />
              Order Book <br />
              Order Book <br />
              Order Book <br />
            </Flex>
            <Flex w="100%" borderWidth={1} borderColor="gray.700">
              Gráfico <br />
              Gráfico <br />
              Gráfico <br />
              Gráfico <br />
              Gráfico <br />
              Gráfico <br />
              Gráfico <br />
              Gráfico <br />
              Gráfico <br />
              Gráfico <br />
              Gráfico <br />
              Gráfico <br />
              Gráfico <br />
              Gráfico
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" maxWidth={370} borderWidth={1} borderColor="gray.700">
          Market Pair <br />
          Market Pair <br />
          Market Pair <br />
          Market Pair <br />
          Market Pair <br />
          Market Pair <br />
        </Flex>
      </Flex>
    </Flex>
  );
}
