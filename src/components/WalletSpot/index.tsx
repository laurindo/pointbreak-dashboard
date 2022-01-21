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
  const criptoBase = pair.toUpperCase().split('_')[0];
  const criptoTransac = pair.toUpperCase().split('_')[1];
  // const tickerPrice = useTickerPrice(pairName);

  // Ainda não capturado do WebSocket
  const priceCryptoBaseInCryptoTransac = '419.0'; // Experimental BNB_BUSD - quanto custa BNB em BUSD
  const availableCryptoBase = '0.03345008'; // Experimental BNB_BUSD - quanto tenho na carteira de BNB
  const availableCryptoTransac = '100.50'; // Experimental BNB_BUSD - quanto tenho na carteira de BUSD

  // Provável taxa de compra e venda
  // Não sei se é assim que é pensada as taxas de compra e venda, ou se simplesmente a Binance não deixa o cara tirar
  // abaixo de X casas decimais, ou se é outra regra, precisamos descobrir isso.
  const taxBuy = 0.05; // Experimental: Taxa de 5%
  const taxSell = 0.05; // Experimental: Taxa 5%
  const maxTransacAllowedSell =
    parseFloat(availableCryptoBase) - parseFloat(availableCryptoBase) * taxSell;
  const maxTransacAllowedBuy =
    parseFloat(availableCryptoTransac) /
    parseFloat(priceCryptoBaseInCryptoTransac); // -
  // (parseFloat(availableCryptoTransac) /
  //   parseFloat(priceCryptoBaseInCryptoTransac)) *
  //   taxBuy;

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
                criptoTransac={criptoTransac} // base asset
                criptoBase={criptoBase} // quote asset
                available={availableCryptoTransac} // actual amount criptoFrom
                availableAssetName={criptoTransac}
                priceCryptoFrom={priceCryptoBaseInCryptoTransac}
                maxTransacAllowed={maxTransacAllowedBuy}
                deal="buy"
              />
              <LimitFormCollumn
                criptoTransac={criptoTransac} // base asset
                criptoBase={criptoBase} // quote asset
                available={availableCryptoBase} // actual amount criptoTo
                availableAssetName={criptoBase}
                priceCryptoFrom={priceCryptoBaseInCryptoTransac}
                maxTransacAllowed={maxTransacAllowedSell}
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
