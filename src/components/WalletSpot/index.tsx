import React from 'react';
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

import { LimitFormColumn } from './LimitFormColumn';
import { MarketFormCollumn } from './MarketFormCollumn';
import { StopLimitFormCollumn } from './StopLimitFormCollumn';
import { OCOFormCollumn } from './OCOFormCollumn';

import usePriceSelectedPair from '@/hooks/usePriceSelectedPair';
import {
  reduceToFixedSizeWithRound,
  reduceToFixedSize,
} from '@/utils/getDecimals';

interface WalletSpotProps {
  pair: string;
  pairName: string;
}

interface PriceProps {
  price: string;
  tickSize: string;
  stepSize: string;
}

export function WalletSpot({ pair, pairName }: WalletSpotProps) {
  // Separando o Pair
  const criptoBase = pair.toUpperCase().split('_')[0];
  const criptoTransac = pair.toUpperCase().split('_')[1];

  // Formando o Preço do Pair selecionado e pegando demais dados na consulta
  const priceSelectedPair = usePriceSelectedPair(pairName.toUpperCase());
  const priceFormat = (priceSelectedPair: PriceProps) => {
    if (
      priceSelectedPair &&
      priceSelectedPair.price &&
      priceSelectedPair.tickSize
    ) {
      return reduceToFixedSizeWithRound(
        priceSelectedPair.price,
        priceSelectedPair.tickSize,
      );
    } else {
      return '0';
    }
  };
  const priceCryptoBaseInCryptoTransac = priceFormat(priceSelectedPair);

  // Pegando as quantidades Disponíveis na Exchange do Pair selecionado
  const availableCryptoBase = '0.03345008'; // Experimental BNB_BUSD - quanto tenho na carteira de BNB
  const availableCryptoTransac = '0.03345008'; // Experimental BNB_BUSD - quanto tenho na carteira de BUSD

  // Taxa da Binance na compra e venda. Tem? Precisa ser controlado aqui ou é debitado na execução interna da API
  // const taxBuy = 0.05; // Experimental: Taxa de 5%
  // const taxSell = 0.05; // Experimental: Taxa 5%

  // Min e Max em Compra e Venda

  // Max que pode vender em cima do Disponível do usuário
  const maxTransacAllowedSell =
    priceSelectedPair.stepSize &&
    reduceToFixedSize(availableCryptoBase, priceSelectedPair.stepSize);

  // Max que pode comprar em cima do Disponível do usuário
  const maxTransacAllowedBuy =
    priceSelectedPair.stepSize &&
    priceSelectedPair.price &&
    reduceToFixedSize(
      String(Number(availableCryptoTransac) / priceSelectedPair.price),
      priceSelectedPair.stepSize,
    );

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
          {/* <Tab fontSize="small" _focus={{ outline: '0' }}>
            Market Order
          </Tab>
          <Tab fontSize="small" _focus={{ outline: '0' }}>
            Stop-Limit
          </Tab>
          <Tab fontSize="small" _focus={{ outline: '0' }}>
            OCO
          </Tab> */}
        </TabList>

        <TabPanels>
          <TabPanel>
            <HStack spacing={6}>
              <LimitFormColumn
                criptoTransac={criptoTransac} // base asset
                criptoBase={criptoBase} // quote asset
                available={availableCryptoTransac} // actual amount criptoFrom
                availableAssetName={criptoTransac}
                priceCryptoFrom={priceCryptoBaseInCryptoTransac}
                maxTransacAllowed={Number(maxTransacAllowedBuy)}
                priceSize={priceSelectedPair.tickSize}
                amountSize={priceSelectedPair.stepSize}
                deal="buy"
              />
              <LimitFormColumn
                criptoTransac={criptoTransac} // base asset
                criptoBase={criptoBase} // quote asset
                available={availableCryptoBase} // actual amount criptoTo
                availableAssetName={criptoBase}
                priceCryptoFrom={priceCryptoBaseInCryptoTransac}
                maxTransacAllowed={Number(maxTransacAllowedSell)}
                priceSize={priceSelectedPair.tickSize}
                amountSize={priceSelectedPair.stepSize}
                deal="sell"
              />
            </HStack>
          </TabPanel>
          {/* <TabPanel>
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
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
