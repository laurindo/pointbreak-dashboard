import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Header } from '@/components/Header';
import { HeaderPairs } from '@/components/HeaderPairs';
import { OrderBook } from '@/components/OrderBook';
import { TradingViewChart } from '@/components/TradingViewChart';
import { WalletSpot } from '@/components/WalletSpot';
import { MarketPairs } from '@/components/MarketPairs';
import useTickerPrice from '@/hooks/useTickerPrice';

export default function Pair({ pair }: { pair: string }) {
  const router = useRouter();
  let pairName = '';

  if (router?.query?.pair) {
    pairName = String(router.query.pair).toLowerCase().replace('_', '');
  } else {
    pairName = pair.toLowerCase().replace('_', '');
  }

  // ISSO TA DEIXANDO A PERFORMANCE DO APP HORRIVEL, VER DEPOIS
  const tickerPrice = {}; //useTickerPrice(pairName);

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
          <HeaderPairs pair={pair} tickerPrice={tickerPrice} />
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

Pair.getInitialProps = async (ctx) => {
  return { pair: ctx.query.pair };
};
