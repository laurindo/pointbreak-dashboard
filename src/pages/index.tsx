import Head from 'next/head'

import Container from '../components/Container'
import Layout from '../components/Layout'
import HistoryOrder from '../components/HistoryOrder'
import MarketHistory from '../components/MarketHistory'
import MarketNews from '../components/MarketNews'
import MarketPairs from '../components/MarketPairs'
import MarketTrade from '../components/MarketTrade'
import OrderBook from '../components/OrderBook'
import DynamicTVS from '../components/DynamicTVS'
import DynamicTVSDark from '../components/DynamicTVSDark'

import { useActiveWeb3React } from '../services/web3'
import useBalance from '@/hooks/useBalance'

import client from '../services/apollo'
import { ApolloProvider } from '@apollo/client'

export default function Dashboard() {
  const { account } = useActiveWeb3React()
  const balance = useBalance(account)

  return (
    <ApolloProvider client={client}>
      <Container id="dashboard-page" className="py-4 md:py-8 lg:py-12" maxWidth="7xl">
        <Head>
          <title>Dashboard | Pointbreak</title>
          <meta name="description" content="Pointbreak" />
        </Head>
        <Layout>
          <div className="container-fluid mtb15 no-fluid">
            <div className="row sm-gutters">
              <div className="col-sm-12 col-md-3">
                <OrderBook />
                <MarketHistory />
              </div>

              <div className="col-sm-12 col-md-6">
                <DynamicTVSDark />
                <MarketTrade />
              </div>

              <div className="col-md-3">
                <MarketPairs />
              </div>
              <div className="col-md-12">
                <HistoryOrder />
              </div>
            </div>
          </div>
        </Layout>
      </Container>
    </ApolloProvider>
  )
}
