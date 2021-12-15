import {
  dayDatasQuery,
  ethPriceQuery,
  factoryQuery,
  liquidityPositionsQuery,
  pairsQuery,
  tokenDayDatasQuery,
  tokenPairsQuery,
  tokenPriceQuery,
  tokenQuery,
  tokenSubsetQuery,
  tokensQuery,
  transactionsQuery,
} from '../queries'

import { ChainId } from '@sushiswap/core-sdk'
import { GRAPH_HOST } from '../constants'
import { pager } from '../functions'

export const EXCHANGE = {
  [ChainId.ETHEREUM]: 'sushiswap/exchange',
  [ChainId.XDAI]: 'sushiswap/xdai-exchange',
  [ChainId.MATIC]: 'sushiswap/matic-exchange',
  [ChainId.FANTOM]: 'sushiswap/fantom-exchange',
  [ChainId.BSC]: 'sushiswap/bsc-exchange',
  [ChainId.HARMONY]: 'sushiswap/harmony-exchange',
  [ChainId.AVALANCHE]: 'sushiswap/avalanche-exchange',
  [ChainId.CELO]: 'jiro-ono/sushitestsubgraph',
  [ChainId.ARBITRUM]: 'sushiswap/arbitrum-exchange',
  [ChainId.MOONRIVER]: 'sushiswap/moonriver-exchange',
  [ChainId.OKEX]: 'okex-exchange/oec',
  [ChainId.HECO]: 'heco-exchange/heco',
}

export const exchange = async (chainId = ChainId.ETHEREUM, query, variables = {}) =>
  pager(`${GRAPH_HOST[chainId]}/subgraphs/name/${EXCHANGE[chainId]}`, query, variables)

export const getPairs = async (chainId = ChainId.ETHEREUM, variables = undefined) => {
  const { pairs } = await exchange(chainId, pairsQuery, variables)
  return pairs
}

export const getTokenSubset = async (chainId = ChainId.ETHEREUM, variables) => {
  // console.log('getTokenSubset')
  const { tokens } = await exchange(chainId, tokenSubsetQuery, variables)
  return tokens
}

export const getTokens = async (chainId = ChainId.ETHEREUM, variables) => {
  // console.log('getTokens')
  const { tokens } = await exchange(chainId, tokensQuery, variables)
  return tokens
}

export const getToken = async (chainId = ChainId.ETHEREUM, query = tokenQuery, variables) => {
  // console.log('getTokens')
  const { token } = await exchange(chainId, query, variables)
  return token
}

export const getTokenDayData = async (chainId = ChainId.ETHEREUM, variables) => {
  // console.log('getTokens')
  const { tokenDayDatas } = await exchange(chainId, tokenDayDatasQuery, variables)
  return tokenDayDatas
}

export const getTokenPrices = async (chainId = ChainId.ETHEREUM, variables) => {
  // console.log('getTokenPrice')
  const { tokens } = await exchange(chainId, tokensQuery, variables)
  return tokens.map((token) => token?.derivedETH)
}

export const getTokenPrice = async (chainId = ChainId.ETHEREUM, query, variables) => {
  // console.log('getTokenPrice')
  const nativePrice = await getNativePrice(chainId)

  const { token } = await exchange(chainId, query, variables)
  return token?.derivedETH * nativePrice
}

export const getNativePrice = async (chainId = ChainId.ETHEREUM, variables = undefined) => {
  // console.log('getEthPrice')
  const data = await getBundle(chainId, undefined, variables)
  return data?.bundles[0]?.ethPrice
}

export const getEthPrice = async (variables = undefined) => {
  return getNativePrice(ChainId.ETHEREUM, variables)
}

export const getYggPrice = async (variables = {}) => {
  return getTokenPrice(ChainId.ETHEREUM, tokenPriceQuery, {
    id: '0x25f8087ead173b73d6e8b84329989a8eea16cf73',
    ...variables,
  })
}

export const getRulerPrice = async (variables = {}) => {
  return getTokenPrice(ChainId.ETHEREUM, tokenPriceQuery, {
    id: '0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8',
    ...variables,
  })
}

export const getTruPrice = async (variables = {}) => {
  return getTokenPrice(ChainId.ETHEREUM, tokenPriceQuery, {
    id: '0x4c19596f5aaff459fa38b0f7ed92f11ae6543784',
    ...variables,
  })
}

export const getCvxPrice = async (variables = {}) => {
  return getTokenPrice(ChainId.ETHEREUM, tokenPriceQuery, {
    id: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b',
    ...variables,
  })
}

export const getMaticPrice = async (variables = {}) => {
  // console.log('getMaticPrice')
  return getTokenPrice(ChainId.MATIC, tokenPriceQuery, {
    id: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    ...variables,
  })
}

export const getAlcxPrice = async (variables = {}) => {
  // console.log('getAlcxPrice')
  return getTokenPrice(ChainId.ETHEREUM, tokenPriceQuery, {
    id: '0xdbdb4d16eda451d0503b854cf79d55697f90c8df',
    ...variables,
  })
}

export const getPicklePrice = async (variables = {}) => {
  return getTokenPrice(ChainId.ETHEREUM, tokenPriceQuery, {
    id: '0x429881672b9ae42b8eba0e26cd9c73711b891ca5',
    ...variables,
  })
}

export const getMphPrice = async (variables = {}) => {
  return getTokenPrice(ChainId.ETHEREUM, tokenPriceQuery, {
    id: '0x8888801af4d980682e47f1a9036e589479e835c5',
    ...variables,
  })
}

export const getSushiPrice = async (variables = {}) => {
  // console.log('getSushiPrice')
  return getTokenPrice(ChainId.ETHEREUM, tokenPriceQuery, {
    id: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    ...variables,
  })
}

export const getStakePrice = async (variables = {}) => {
  return getTokenPrice(ChainId.XDAI, tokenPriceQuery, {
    id: '0xb7d311e2eb55f2f68a9440da38e7989210b9a05e',
    ...variables,
  })
}

export const getOnePrice = async (variables = undefined) => {
  return getNativePrice(ChainId.HARMONY, variables)
}

export const getAvaxPrice = async (variables = undefined) => {
  return getNativePrice(ChainId.AVALANCHE, variables)
}

export const getCeloPrice = async () => {
  return getTokenPrice(ChainId.CELO, tokenPriceQuery, {
    id: '0x471ece3750da237f93b8e339c536989b8978a438',
  })
}

export const getMovrPrice = async () => {
  return getTokenPrice(ChainId.MOONRIVER, tokenPriceQuery, {
    id: '0xf50225a84382c74cbdea10b0c176f71fc3de0c4d',
  })
}

export const getSpellPrice = async () => {
  return getTokenPrice(ChainId.ETHEREUM, tokenPriceQuery, {
    id: '0x090185f2135308bad17527004364ebcc2d37e5f6',
  })
}

export const getBundle = async (
  chainId = ChainId.ETHEREUM,
  query = ethPriceQuery,
  variables = {
    id: 1,
  }
) => {
  return exchange(chainId, query, variables)
}

export const getLiquidityPositions = async (chainId = ChainId.ETHEREUM, variables) => {
  const { liquidityPositions } = await exchange(chainId, liquidityPositionsQuery, variables)
  return liquidityPositions
}

export const getDayData = async (chainId = ChainId.ETHEREUM, variables = undefined) => {
  const { dayDatas } = await exchange(chainId, dayDatasQuery, variables)
  return dayDatas
}

export const getFactory = async (chainId = ChainId.ETHEREUM, variables = undefined) => {
  const { factories } = await exchange(chainId, factoryQuery, variables)
  return factories[0]
}

export const getTransactions = async (chainId = ChainId.ETHEREUM, variables = undefined) => {
  const { swaps } = await exchange(chainId, transactionsQuery, variables)
  return swaps
}

export const getTokenPairs = async (chainId = ChainId.ETHEREUM, variables = undefined) => {
  const { pairs0, pairs1 } = await exchange(chainId, tokenPairsQuery, variables)
  return pairs0 || pairs1 ? [...(pairs0 ? pairs0 : []), ...(pairs1 ? pairs1 : [])] : undefined
}
