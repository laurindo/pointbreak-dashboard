import React from 'react';
import { useStoreActions } from 'easy-peasy';
import { NETWORK_ICON, NETWORK_LABEL } from '@/config/networks';

import Image from 'next/image';
import NetworkModel from '@/components/Modals/NetworkModal';
import { useActiveWeb3React } from '@/services/web3';
// import { useNetworkModalToggle } from '../../state/application/hooks';

function Web3Network(): JSX.Element | null {
  const { chainId } = useActiveWeb3React();

  const setOpenWalletModal = useStoreActions(
    (action: any) => action.setOpenWalletModal,
  );

  if (!chainId) return null;

  return (
    <div onClick={setOpenWalletModal}>
      <div>
        <Image
          src={NETWORK_ICON[chainId]}
          alt="Switch Network"
          className="rounded-md"
          width="22px"
          height="22px"
        />
        <label>{NETWORK_LABEL[chainId]}</label>
      </div>
      <NetworkModel />
    </div>
  );
}

export default Web3Network;
