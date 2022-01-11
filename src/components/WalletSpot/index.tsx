import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { LimitFormCollumn } from './LimitFormCollumn';
import { MarketFormCollumn } from './MarketFormCollumn';
import { StopLimitFormCollumn } from './StopLimitFormCollumn';
import { OCOFormCollumn } from './OCOFormCollumn';

export function WalletSpot() {
  const router = useRouter();
  const [pair, setPair] = useState('BTC_USDT');

  useEffect(() => {
    if (router?.query?.pair) {
      debugger;
      setPair(String(router.query.pair));
    }
  }, [router]);

  return (
    <Flex direction="column">
      <Box
        width="100%"
        bgColor="gray.800"
        color="blue.500"
        fontSize="medium"
        fontWeight="bold"
        padding="2"
      >
        Wallet Spot
      </Box>
      <Tabs>
        <TabList>
          <Tab fontSize="small" _focus={{ outline: '0' }}>
            Limite
          </Tab>
          <Tab fontSize="small" _focus={{ outline: '0' }}>
            Market Order
          </Tab>
          <Tab fontSize="small" _focus={{ outline: '0' }}>
            Stop-Limit
          </Tab>
          <Tab fontSize="small" _focus={{ outline: '0' }}>
            OCO
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <HStack spacing={6}>
              <LimitFormCollumn
                criptoFrom={pair.split('_')[0]} // base asset
                criptoTo={pair.split('_')[1]} // quote asset
                available="0.00000000"
                availableAssetName={pair.split('_')[0]}
                deal="buy"
              />
              <LimitFormCollumn
                criptoFrom={pair.split('_')[0]} // base asset
                criptoTo={pair.split('_')[1]} // quote asset
                available="0.00000000"
                availableAssetName={pair.split('_')[1]}
                deal="sell"
              />
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack spacing={6}>
              <MarketFormCollumn
                criptoFrom="ETH"
                criptoTo="EOS"
                available="0.00000000"
                deal="buy"
              />
              <MarketFormCollumn
                criptoFrom="ETH"
                criptoTo="EOS"
                available="0.00000000"
                deal="sell"
              />
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack spacing={6}>
              <StopLimitFormCollumn
                criptoFrom="ETH"
                criptoTo="EOS"
                available="0.00000000"
                deal="buy"
              />
              <StopLimitFormCollumn
                criptoFrom="ETH"
                criptoTo="EOS"
                available="0.00000000"
                deal="sell"
              />
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack spacing={6}>
              <OCOFormCollumn
                criptoFrom="ETH"
                criptoTo="EOS"
                available="0.00000000"
                deal="buy"
              />
              <OCOFormCollumn
                criptoFrom="ETH"
                criptoTo="EOS"
                available="0.00000000"
                deal="sell"
              />
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
