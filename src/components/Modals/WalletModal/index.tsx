import React, { useEffect, useState } from 'react';
import { SUPPORTED_WALLETS, injected } from '@/config/wallets';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Flex,
} from '@chakra-ui/react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';

import { AbstractConnector } from '@web3-react/abstract-connector';
// import AccountDetails from '../../components/AccountDetails';
// import { ApplicationModal } from '../../state/application/actions';
// import { ButtonError } from '../../components/Button';
// import ExternalLink from '../../components/ExternalLink';
// import Modal from '../../components/Modal';
// import ModalHeader from '../../components/ModalHeader';
// import { OVERLAY_READY } from '../../entities/FortmaticConnector';
import Option from './Option';
import PendingView from './PendingView';
// import ReactGA from 'react-ga'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { useStoreActions, useStoreState } from 'easy-peasy';
// import { isMobile } from 'react-device-detect'
// import { t } from '@lingui/macro'
// import { useLingui } from '@lingui/react'
// import usePrevious from '../../hooks/usePrevious';

declare var window: any;
declare var web3: any;

const WALLET_VIEWS = {
  OPTIONS: 'options',
  OPTIONS_SECONDARY: 'options_secondary',
  ACCOUNT: 'account',
  PENDING: 'pending',
};

export default function WalletModal({
  pendingTransactions,
  confirmedTransactions,
  ENSName,
}: {
  pendingTransactions: string[]; // hashes of pending
  confirmedTransactions: string[]; // hashes of confirmed
  ENSName?: string;
}) {
  const isOpenModal = useStoreState((state: any) => state.isOpenModal);
  const setOpenWalletModal = useStoreActions(
    (action: any) => action.setOpenWalletModal,
  );

  const setCloseWalletModal = useStoreActions(
    (action: any) => action.setCloseWalletModal,
  );

  const isMobile = false;
  // console.log({ ENSName })
  // important that these are destructed from the account-specific web3-react context
  const { active, account, connector, activate, error, deactivate } =
    useWeb3React();

  // const { i18n } = useLingui()

  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);

  const [pendingWallet, setPendingWallet] = useState<
    AbstractConnector | undefined
  >();

  const [pendingError, setPendingError] = useState<boolean>();

  // const walletModalOpen = useModalOpen(ApplicationModal.WALLET)

  // const previousAccount = usePrevious(account);

  // close modal when a connection is successful
  // const activePrevious = usePrevious(active);
  // const connectorPrevious = usePrevious(connector);

  const tryActivation = async (
    connector:
      | (() => Promise<AbstractConnector>)
      | AbstractConnector
      | undefined,
  ) => {
    let name = '';
    let conn = typeof connector === 'function' ? await connector() : connector;

    Object.keys(SUPPORTED_WALLETS).map((key) => {
      if (connector === SUPPORTED_WALLETS[key].connector) {
        return (name = SUPPORTED_WALLETS[key].name);
      }
      return true;
    });
    // log selected wallet
    /*ReactGA.event({
      category: 'Wallet',
      action: 'Change Wallet',
      label: name,
    })*/
    setPendingWallet(conn); // set wallet for pending view
    setWalletView(WALLET_VIEWS.PENDING);

    // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
    if (
      conn instanceof WalletConnectConnector
    ) {
      conn.walletConnectProvider = undefined;
    }

    conn &&
      activate(conn, undefined, true)
        .then(() => {
          // após ativar, fecha o modal
          setCloseWalletModal(true);
        })
        .catch((error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(conn); // a little janky...can't use setError because the connector isn't set
          } else {
            setPendingError(true);
          }
        });
  };

  // get wallets user can switch too, depending on device/browser
  function getOptions() {
    const isMetamask =
      typeof window !== 'undefined' &&
      window?.ethereum &&
      window?.ethereum.isMetaMask;
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key];

      // check for mobile options
      if (isMobile) {
        // disable portis on mobile for now
        if (option.name === 'Portis') {
          return null;
        }

        if (
          typeof window !== 'undefined' &&
          !window?.web3 &&
          !window?.ethereum &&
          option.mobile
        ) {
          return (
            <Option
              onClick={() => {
                tryActivation(option.connector);
              }}
              id={`connect-${key}`}
              key={key}
              active={option.connector && option.connector === connector}
              color={option.color}
              link={option.href}
              header={option.name}
              subheader={null}
              icon={'/images/wallets/' + option.iconName}
            />
          );
        }
        return null;
      }

      // overwrite injected when needed
      if (option.connector === injected) {
        // don't show injected if there's no injected provider
        if (
          typeof window !== 'undefined' &&
          !(window.web3 || window.ethereum)
        ) {
          if (option.name === 'MetaMask') {
            return (
              <Option
                id={`connect-${key}`}
                key={key}
                color={'#E8831D'}
                header={'Install Metamask'}
                subheader={null}
                link={'https://metamask.io/'}
                icon="/images/wallets/metamask.png"
              />
            );
          } else {
            return null; // dont want to return install twice
          }
        }
        // don't return metamask if injected provider isn't metamask
        else if (option.name === 'MetaMask' && !isMetamask) {
          return null;
        }
        // likewise for generic
        else if (option.name === 'Injected' && isMetamask) {
          return null;
        }
      }

      // return rest of options
      return (
        !isMobile &&
        !option.mobileOnly && (
          <Option
            id={`connect-${key}`}
            onClick={() => {
              option.connector === connector
                ? setWalletView(WALLET_VIEWS.ACCOUNT)
                : !option.href && tryActivation(option.connector);
            }}
            key={key}
            active={option.connector === connector}
            color={option.color}
            link={option.href}
            header={option.name}
            subheader={null} // use option.descriptio to bring back multi-line
            icon={'/images/wallets/' + option.iconName}
          />
        )
      );
    });
  }

  function getModalContent() {
    if (error) {
      // debugger;
      return (
        <div>
          <div>Wrong network or error network</div>
          <div>
            {error instanceof UnsupportedChainIdError ? (
              <h5>Please connect to the appropriate Ethereum network.</h5>
            ) : (
              'Error connecting. Try refreshing the page.'
            )}
            <div style={{ marginTop: '1rem' }} />
            <button>Disconnect</button>
          </div>
        </div>
      );
    }
    if (account && walletView === WALLET_VIEWS.ACCOUNT) {
      return (
        <>
          <div>Account Details</div>
          <button onClick={setCloseWalletModal}>Close</button>
        </>
      );
    }
    return (
      <Flex>
        {walletView === WALLET_VIEWS.PENDING ? (
          <PendingView
            connector={pendingWallet}
            error={pendingError}
            setPendingError={setPendingError}
            tryActivation={tryActivation}
          />
        ) : (
          <div>{getOptions()}</div>
        )}
      </Flex>
    );
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onClose={setCloseWalletModal}
      motionPreset="slideInBottom"
    >
      <ModalOverlay bg="gray.900" css={{ opacity: '0.9 !important' }} />
      <ModalContent
        bg="gray.800"
        borderWidth={1}
        borderColor="gray.700"
        minHeight="500px"
        alignItems="center"
        justifyContent="center"
      >
        <ModalHeader>Select Wallet</ModalHeader>

        <ModalBody>{getModalContent()}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
