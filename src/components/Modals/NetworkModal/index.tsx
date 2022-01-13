import { useStoreState, useStoreActions } from 'easy-peasy';
import { Modal } from '@chakra-ui/react';
import { NETWORK_ICON, NETWORK_LABEL } from '@/config/networks';
import { ChainId } from '@sushiswap/core-sdk';
import Image from 'next/image';
import React from 'react';
import cookie from 'cookie-cutter';
import { useActiveWeb3React } from '@/services/web3';

export const SUPPORTED_NETWORKS: {
  [chainId in ChainId]?: {
    chainId: string;
    chainName: string;
    nativeCurrency: {
      name: string;
      symbol: string;
      decimals: number;
    };
    rpcUrls: string[];
    blockExplorerUrls: string[];
  };
} = {
  [ChainId.ETHEREUM]: {
    chainId: '0x1',
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.infura.io/v3'],
    blockExplorerUrls: ['https://etherscan.com'],
  },
  [ChainId.FANTOM]: {
    chainId: '0xfa',
    chainName: 'Fantom',
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: ['https://rpcapi.fantom.network'],
    blockExplorerUrls: ['https://ftmscan.com'],
  },
  [ChainId.BSC]: {
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    blockExplorerUrls: ['https://bscscan.com'],
  },
  [ChainId.MATIC]: {
    chainId: '0x89',
    chainName: 'Matic',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://polygon-rpc.com'], // ['https://matic-mainnet.chainstacklabs.com/'],
    blockExplorerUrls: ['https://polygonscan.com'],
  },
  [ChainId.HECO]: {
    chainId: '0x80',
    chainName: 'Heco',
    nativeCurrency: {
      name: 'Heco Token',
      symbol: 'HT',
      decimals: 18,
    },
    rpcUrls: ['https://http-mainnet.hecochain.com'],
    blockExplorerUrls: ['https://hecoinfo.com'],
  },
  [ChainId.XDAI]: {
    chainId: '0x64',
    chainName: 'xDai',
    nativeCurrency: {
      name: 'xDai Token',
      symbol: 'xDai',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.xdaichain.com'],
    blockExplorerUrls: ['https://blockscout.com/poa/xdai'],
  },
  [ChainId.HARMONY]: {
    chainId: '0x63564C40',
    chainName: 'Harmony',
    nativeCurrency: {
      name: 'One Token',
      symbol: 'ONE',
      decimals: 18,
    },
    rpcUrls: [
      'https://api.harmony.one',
      'https://s1.api.harmony.one',
      'https://s2.api.harmony.one',
      'https://s3.api.harmony.one',
    ],
    blockExplorerUrls: ['https://explorer.harmony.one/'],
  },
  [ChainId.AVALANCHE]: {
    chainId: '0xA86A',
    chainName: 'Avalanche',
    nativeCurrency: {
      name: 'Avalanche Token',
      symbol: 'AVAX',
      decimals: 18,
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://cchain.explorer.avax.network'],
  },
  [ChainId.OKEX]: {
    chainId: '0x42',
    chainName: 'OKEx',
    nativeCurrency: {
      name: 'OKEx Token',
      symbol: 'OKT',
      decimals: 18,
    },
    rpcUrls: ['https://exchainrpc.okex.org'],
    blockExplorerUrls: ['https://www.oklink.com/okexchain'],
  },
  [ChainId.ARBITRUM]: {
    chainId: '0xA4B1',
    chainName: 'Arbitrum',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://arbiscan.io'],
  },
  [ChainId.CELO]: {
    chainId: '0xA4EC',
    chainName: 'Celo',
    nativeCurrency: {
      name: 'Celo',
      symbol: 'CELO',
      decimals: 18,
    },
    rpcUrls: ['https://forno.celo.org'],
    blockExplorerUrls: ['https://explorer.celo.org'],
  },
  [ChainId.PALM]: {
    chainId: '0x2A15C308D',
    chainName: 'Palm',
    nativeCurrency: {
      name: 'Palm',
      symbol: 'PALM',
      decimals: 18,
    },
    rpcUrls: [
      'https://palm-mainnet.infura.io/v3/da5fbfafcca14b109e2665290681e267',
    ],
    blockExplorerUrls: ['https://explorer.palm.io'],
  },
  [ChainId.MOONRIVER]: {
    chainId: '0x505',
    chainName: 'Moonriver',
    nativeCurrency: {
      name: 'Moonriver',
      symbol: 'MOVR',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.moonriver.moonbeam.network'],
    blockExplorerUrls: ['https://moonriver.moonscan.io'],
  },
  [ChainId.FUSE]: {
    chainId: '0x7A',
    chainName: 'Fuse',
    nativeCurrency: {
      name: 'Fuse',
      symbol: 'FUSE',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.fuse.io'],
    blockExplorerUrls: ['https://explorer.fuse.io'],
  },
  [ChainId.TELOS]: {
    chainId: '0x28',
    chainName: 'Telos',
    nativeCurrency: {
      name: 'Telos',
      symbol: 'TLOS',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.telos.net/evm'],
    blockExplorerUrls: ['https://rpc1.us.telos.net/v2/explore'],
  },
};

export default function NetworkModal(): JSX.Element | null {
  const { chainId, library, account } = useActiveWeb3React();
  // const networkModalOpen = useModalOpen(ApplicationModal.NETWORK);
  const isOpenModal = useStoreState((state) => state.isOpenModal);
  const setOpenWalletModal = useStoreActions(
    (action) => action.setOpenWalletModal,
  );
  const setCloseWalletModal = useStoreActions(
    (action) => action.setCloseWalletModal,
  );

  if (!chainId) return null;

  return (
    <Modal isOpen={isOpenModal} onClose={setCloseWalletModal}>
      <div>Select a Network</div>
      <div className="mb-6 text-lg text-primary">
        You are currently browsing{' '}
        <span className="font-bold text-pink">Point Break</span>
        <br /> on the{' '}
        <span className="font-bold text-blue">
          {NETWORK_LABEL[chainId]}
        </span>{' '}
        network
      </div>

      <div className="grid grid-flow-row-dense grid-cols-1 gap-5 overflow-y-auto md:grid-cols-2">
        {[
          ChainId.ETHEREUM,
          ChainId.MATIC,
          ChainId.FANTOM,
          ChainId.ARBITRUM,
          ChainId.OKEX,
          ChainId.HECO,
          ChainId.BSC,
          ChainId.XDAI,
          ChainId.HARMONY,
          ChainId.AVALANCHE,
          ChainId.CELO,
          ChainId.PALM,
          ChainId.MOONRIVER,
          // ChainId.FUSE,
          ChainId.TELOS,
        ].map((key: ChainId, i: number) => {
          if (chainId === key) {
            return (
              <button key={i}>
                <div>
                  <Image
                    src={NETWORK_ICON[key]}
                    alt={`Switch to ${NETWORK_LABEL[key]} Network`}
                    className="rounded-md"
                    width="32px"
                    height="32px"
                  />
                  <div className="font-bold text-primary">
                    {NETWORK_LABEL[key]}
                  </div>
                </div>
              </button>
            );
          }
          return (
            <button
              key={i}
              onClick={() => {
                setOpenWalletModal();
                const params = SUPPORTED_NETWORKS[key];
                cookie.set('chainId', key);
                if (key === ChainId.ETHEREUM) {
                  library?.send('wallet_switchEthereumChain', [
                    { chainId: '0x1' },
                    account,
                  ]);
                } else {
                  library?.send('wallet_addEthereumChain', [params, account]);
                }
              }}
            >
              <Image
                src={NETWORK_ICON[key]}
                alt="Switch Network"
                width="32px"
                height="32px"
              />
              <div>{NETWORK_LABEL[key]}</div>
            </button>
          );
        })}
      </div>
    </Modal>
  );
}
