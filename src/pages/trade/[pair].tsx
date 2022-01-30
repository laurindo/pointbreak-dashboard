import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Header } from '@/components/Header';
import { HeaderPairs } from '@/components/HeaderPairs';
import { OrderBook } from '@/components/OrderBook';
import { TradingViewChart } from '@/components/TradingViewChart';
import { WalletSpot } from '@/components/WalletSpot';
import { MarketPairs } from '@/components/MarketPairs';
import { getSession } from 'next-auth/react';

export default function Pair({ pair }: { pair: string }) {
  const router = useRouter();
  let pairName = '';

  if (router?.query?.pair) {
    pairName = String(router.query.pair).toLowerCase().replace('_', '');
  } else {
    pairName = pair.toLowerCase().replace('_', '');
  }

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
          maxWidth={1200}
          borderWidth={1}
          borderColor="gray.700"
        >
          <HeaderPairs pair={pair} pairName={pairName} />
          <Flex width="100%">
            <OrderBook />
            <Flex width="100%" maxWidth={880} direction="column">
              <TradingViewChart />
              <WalletSpot pair={pair} pairName={pairName} />
            </Flex>
          </Flex>
        </Flex>
        <MarketPairs />
      </Flex>
    </Flex>
  );
}

export const getServerSideProps = async (ctx) => {
  // Check if the user is authenticated from the server
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth/signin',
      },
      props: {},
    };
  }
  return {
    props: {
      pair: ctx.query.pair,
    },
  };
};
