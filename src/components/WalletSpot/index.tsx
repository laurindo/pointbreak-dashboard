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
import useTickerPrice from '@/hooks/useTickerPrice';

interface WalletSpotProps {
  pair: string;
  pairName: string;
}

export function WalletSpot({ pair, pairName }: WalletSpotProps) {
  const symbol = pair.toUpperCase().split('_');
  // const tickerPrice = useTickerPrice(pairName);
  const priceCryptoFrom = '42452.30'; // Experimental
  const availableCryptoFrom = '1.05'; // Experimental
  const availableCryptoTo = '100.50'; // Experimental

  return (
    <Flex direction="column">
      <Box
        width="100%"
        bgColor="gray.800"
        color="blue.600"
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
                criptoFrom={symbol[0]} // base asset
                criptoTo={symbol[1]} // quote asset
                available={availableCryptoTo} // actual amount criptoFrom
                availableAssetName={symbol[1]}
                // priceCryptoFrom={tickerPrice?.c ? tickerPrice.c : 0}
                priceCryptoFrom={priceCryptoFrom}
                deal="buy"
              />
              <LimitFormCollumn
                criptoFrom={symbol[0]} // base asset
                criptoTo={symbol[1]} // quote asset
                available={availableCryptoFrom} // actual amount criptoTo
                availableAssetName={symbol[0]}
                // priceCryptoFrom={tickerPrice?.c ? tickerPrice.c : 0}
                priceCryptoFrom={priceCryptoFrom}
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
