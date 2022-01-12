import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { useStoreActions, useStoreState } from 'easy-peasy';

import React from 'react';
// import { t } from '@lingui/macro'
// import { useLingui } from '@lingui/react'
// import { useWalletModalToggle } from '../../state/application/hooks'

export default function Web3Connect({
  color = 'gray',
  size = 'sm',
  className = '',
  ...rest
}) {
  // const { i18n } = useLingui()
  const toggleWalletModal = useStoreActions(
    (action) => action.toggleWalletModal,
  );

  const { error } = useWeb3React();
  return error ? (
    <div
      className="flex items-center justify-center px-4 py-2 font-semibold text-white border rounded bg-opacity-80 border-red bg-red hover:bg-opacity-100"
      onClick={() => {
        /*toggleWalletModal*/
      }}
    >
      <div className="mr-1">
        icon here
        {/*<Icon />*/}
      </div>
      {/*error instanceof UnsupportedChainIdError ? i18n._(t`You are on the wrong network`) : i18n._(t`Error`)*/}
    </div>
  ) : (
    <button id="connect-wallet" onClick={() => toggleWalletModal(false)}>
      Connect to a wallet
    </button>
  );
}
