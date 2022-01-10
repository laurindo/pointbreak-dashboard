import dynamic from 'next/dynamic';
import {
  Flex
} from '@chakra-ui/react';

const MyChart = dynamic(() => import('./TradingChartDark.js'), { ssr: false });

export function TradingViewChart() {

  return (
    <Flex w="100%" borderWidth={1} borderColor="gray.700">
      <Flex w="100%" h="500px">
        <MyChart />
      </Flex>
    </Flex>
  );
}
