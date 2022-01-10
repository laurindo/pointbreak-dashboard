import {
  Flex,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
} from '@chakra-ui/react';
import { useState, useEffect, useMemo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { RiStarFill } from 'react-icons/ri';

import { SearchInMarkerPairs } from './SearchInMarkerPairs';
import { TableToCript } from './TableToCripto';
import usePrices from '@/hooks/usePrices';
import useSymbolsByName from '@/hooks/useSymbolsByName';
import { joinSymbols } from '@/utils/filter';

const tabs = [
  <Icon as={RiStarFill} fontSize="10" />,
  'BTC',
  'ETH',
  'BUSD',
  'BNB',
];

export function MarketPairs() {
  const prices = usePrices(); // request de preço de todas as moedas
  const symbolsBUSD = useSymbolsByName('BUSD'); // request pra retornar os simbolos
  const symbolsBTC = useSymbolsByName('BTC');
  const symbolsETH = useSymbolsByName('ETH');
  const symbolsUSDT = useSymbolsByName('USDT');
  const busdPairs = joinSymbols(prices, symbolsBUSD); // junta os preços com os simbolos
  const btcPairs = joinSymbols(prices, symbolsBTC);
  const ethPairs = joinSymbols(prices, symbolsETH);
  const usdtPairs = joinSymbols(prices, symbolsUSDT);

  const [dataFavoritePairs, setDataFavoritePairs] = useState([]);
  const [dataBtcPairs, setDataBtcPairs] = useState([]);
  const [dataEthPairs, setDataEthPairs] = useState([]);
  const [dataBusdPairs, setDataBusdPairs] = useState([]); // seta os dados pra renderizar na tabela
  const [dataUsdtPairs, setDataUsdtPairs] = useState([]);

  const [filterText, setFilterText] = useState('');

  // usa a action pra guardar no Store do redux o par selecionado
  const setSelectedPair = useStoreActions((actions) => actions.setSelectedPair);
  const setFavoritePairs = useStoreActions(
    (actions) => actions.setFavoritePairs,
  );
  const removeFavoritePairs = useStoreActions(
    (actions) => actions.removeFavoritePairs,
  );
  const favoritePairs = useStoreState((state) => state.favoritesPairs);

  // ==========================================================================
  // FIX - DEPOIS REFATORAR ESSA PARTE de BAIXO
  // ==========================================================================

  // Par Favoritos
  // Checar porque ao clicar em Favorito, a moeda nao está sendo adicionada
  // Pelo que eu vi, o useEffect está rodando primeiro do que o useStoreActions
  // provavelmente antes de salvar no store, o useEffect aqui está rodando e atualizando
  // o valor antigo
  useEffect(() => {
    if (favoritePairs && favoritePairs.length && prices && prices.length) {
      const favorites = favoritePairs.map((pair, index) => {
        const price = prices
          ? prices.find((price) => price.symbol === pair)
          : 0;
        return {
          key: index,
          pair,
          price: price.price,
          change: '-',
        };
      });
      setDataFavoritePairs(favorites);
    }
  }, [favoritePairs, prices]);

  // Par BUSD
  useEffect(() => {
    if (busdPairs && busdPairs.length) {
      const dataBusd = busdPairs.map((busdPair, index) => ({
        key: index,
        pair: busdPair.symbol,
        price: busdPair.price,
        change: '-',
      }));
      setDataBusdPairs(dataBusd);
    }
  }, [busdPairs, setSelectedPair]);

  // Par BTC
  useEffect(() => {
    if (btcPairs && btcPairs.length) {
      const dataBtc = btcPairs.map((btcPair, index) => ({
        key: index,
        pair: btcPair.symbol,
        price: btcPair.price,
        change: '-',
      }));
      setDataBtcPairs(dataBtc);
    }
  }, [btcPairs, setSelectedPair]);

  // Par ETH
  useEffect(() => {
    if (ethPairs && ethPairs.length) {
      const dataEth = ethPairs.map((ethPair, index) => ({
        key: index,
        pair: ethPair.symbol,
        price: ethPair.price,
        change: '-',
      }));
      setDataEthPairs(dataEth);
    }
  }, [ethPairs, setSelectedPair]);

  // Par USDT
  useEffect(() => {
    if (usdtPairs && usdtPairs.length) {
      const dataUsdt = usdtPairs.map((usdtPair, index) => ({
        key: index,
        pair: usdtPair.symbol,
        price: usdtPair.price,
        change: '-',
      }));
      setDataUsdtPairs(dataUsdt);
    }
  }, [usdtPairs, setSelectedPair]);

  return (
    <Flex
      direction="column"
      width="100%"
      maxWidth={320}
      borderTopWidth={1}
      borderBottomWidth={1}
      borderRightWidth={1}
      borderColor="gray.700"
      paddingX={4}
    >
      <SearchInMarkerPairs />

      <Tabs w="100%" size="sm">
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index} fontSize="small">
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel px="0" py="5">
            <TableToCript data={dataFavoritePairs} />
          </TabPanel>

          <TabPanel px="0" py="5">
            <TableToCript data={dataBtcPairs} />
          </TabPanel>

          <TabPanel px="0" py="5">
            <TableToCript data={dataEthPairs} />
          </TabPanel>

          <TabPanel px="0" py="5">
            <TableToCript data={dataBusdPairs} />
          </TabPanel>

          <TabPanel px="0" py="5">
            <TableToCript data={dataUsdtPairs} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
