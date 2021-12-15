import { AddressZero } from '@ethersproject/constants'
import { ChainId } from '@sushiswap/core-sdk'

type Currency = { address: string; decimals: number }

// Pricing currency
// TODO: Check decimals and finish table
export const USD_CURRENCY: { [chainId in ChainId]?: Currency } = {
  [ChainId.ETHEREUM]: {
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    decimals: 6,
  },
  [ChainId.ROPSTEN]: {
    address: '0x516de3a7A567d81737e3a46ec4FF9cFD1fcb0136',
    decimals: 6,
  },
  [ChainId.KOVAN]: {
    address: '0x07de306FF27a2B630B1141956844eB1552B956B5',
    decimals: 6,
  },
  [ChainId.RINKEBY]: {
    address: '0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02',
    decimals: 6,
  },
  [ChainId.GÖRLI]: {
    address: '0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C',
    decimals: 6,
  },
  [ChainId.BSC]: {
    address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    decimals: 18,
  },
  [ChainId.BSC_TESTNET]: {
    address: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
    decimals: 18,
  },
  [ChainId.HECO]: {
    address: '0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047',
    decimals: 8,
  },
  [ChainId.HECO_TESTNET]: { address: '', decimals: 6 },
  [ChainId.MATIC]: {
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    decimals: 6,
  },
  [ChainId.MATIC_TESTNET]: { address: '', decimals: 6 },
  [ChainId.XDAI]: { address: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83', decimals: 6 },
  [ChainId.ARBITRUM]: { address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', decimals: 6 },
  // TODO: Update below with new stable once liquidty is sufficient
  [ChainId.AVALANCHE]: { address: '0xde3A24028580884448a5397872046a019649b084', decimals: 6 },
}

export function getCurrency(chainId: ChainId): Currency {
  return (
    USD_CURRENCY[chainId] || {
      address: AddressZero,
      decimals: 18,
    }
  )
}
