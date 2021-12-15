import { useEffect } from 'react'
import Head from 'next/head'
import Web3 from 'web3'

import { BigNumber } from '@ethersproject/bignumber'

import Container from '../components/Container'
import { useActiveWeb3React } from '../services/web3'
import { getRouterContract } from '../functions/contract'

export default function Dashboard() {
  const URL =
    process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_BSC_TEST_URL : process.env.NEXT_PUBLIC_BSC_MAIN_URL
  const web3 = new Web3(URL)
  const { account, chainId, library } = useActiveWeb3React()

  useEffect(() => {
    async function test() {
      // link pra checar transacao na rede BSC
      // https://testnet.bscscan.com/tx/0xb002a3f2939a8c4656a38ae767d7bc408ef60cb8d9c46e836c51f906b6ff296f
      // https://testnet.bscscan.com/address/0x8b624301f512e46b666a825fbd4336a273fd0ff9#code
      // https://docs.binance.org/smart-chain/developer/BEP20.html
      const tokenAddresses = ['0x8b624301F512E46B666A825FBd4336A273fd0FF9']
      for (let tokenAddress of tokenAddresses) {
        const contract = new web3.eth.Contract(
          [
            {
              constant: true,
              inputs: [{ name: '_owner', type: 'address' }],
              name: 'balanceOf',
              outputs: [{ name: 'balance', type: 'uint256' }],
              type: 'function',
            },
          ],
          tokenAddress
        )
        const balance = await contract.methods.balanceOf(account).call()
        debugger
      }
    }
    test()
  }, [account, chainId, library])
  return (
    <Container id="dashboard-page" className="py-4 md:py-8 lg:py-12" maxWidth="2xl">
      <Head>
        <title>Dashboard | Pointbreak</title>
        <meta name="description" content="Pointbreak" />
      </Head>
    </Container>
  )
}
