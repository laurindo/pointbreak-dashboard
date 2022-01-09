import {
  Flex
} from '@chakra-ui/react';
import TradingViewChart from '@/components/TradingViewChart'

export function GraficTrade() {

  return (
    <Flex w="100%" borderWidth={1} borderColor="gray.700">
      <Flex w="100%" h="500px">
        <TradingViewChart />
      </Flex>
    </Flex>
  );
}
