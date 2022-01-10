import { Flex } from '@chakra-ui/react';
import TradingViewChart from '@/components/TradingViewChart';

export function GraficTrade() {
  return (
    <Flex w="100%" h="500px">
      <TradingViewChart />
    </Flex>
  );
}
