import { AlertTriangle, ArrowUpCircle, CheckCircle } from 'react-feather'
import { ChainId, Currency } from '@sushiswap/core-sdk'
import React, { FC } from 'react'
import { Trans, t } from '@lingui/macro'

import Button from '../../components/Button'
import CloseIcon from '../../components/CloseIcon'
import ExternalLink from '../../components/ExternalLink'
import Image from '../../components/Image'
import Lottie from 'lottie-react'
import Modal from '../../components/Modal'
import ModalHeader from '../../components/ModalHeader'
import { RowFixed } from '../../components/Row'
import { getExplorerLink } from '../../functions/explorer'
import loadingRollingCircle from '../../animation/loading-rolling-circle.json'
import { useActiveWeb3React } from '../../services/web3'
import useAddTokenToMetaMask from '../../hooks/useAddTokenToMetaMask'
import { useLingui } from '@lingui/react'

interface ConfirmationPendingContentProps {
  onDismiss: () => void
  pendingText: string
}

export const ConfirmationPendingContent: FC<ConfirmationPendingContentProps> = ({ onDismiss, pendingText }) => {
  const { i18n } = useLingui()
  return (
    <div>
      <div className="flex justify-end">
        <CloseIcon onClick={onDismiss} />
      </div>
      <div className="w-24 pb-4 m-auto">
        <Lottie animationData={loadingRollingCircle} autoplay loop />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="text-xl font-bold text-high-emphesis">{i18n._(t`Waiting for Confirmation`)}</div>
        <div className="font-bold">{pendingText}</div>
        <div className="text-sm font-bold text-secondary">{i18n._(t`Confirm this transaction in your wallet`)}</div>
      </div>
    </div>
  )
}

interface TransactionSubmittedContentProps {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
  currencyToAdd?: Currency | undefined
  inline?: boolean // not in modal
}

export const TransactionSubmittedContent: FC<TransactionSubmittedContentProps> = ({
  onDismiss,
  chainId,
  hash,
  currencyToAdd,
}) => {
  const { i18n } = useLingui()
  const { library } = useActiveWeb3React()
  const { addToken, success } = useAddTokenToMetaMask(currencyToAdd)
  return (
    <div>
      <div className="flex justify-end">
        <CloseIcon onClick={onDismiss} />
      </div>
      <div className="w-24 pb-4 m-auto">
        <ArrowUpCircle strokeWidth={0.5} size={90} className="text-blue" />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="text-xl font-bold">{i18n._(t`Transaction Submitted`)}</div>
        {chainId && hash && (
          <ExternalLink href={getExplorerLink(chainId, hash, 'transaction')}>
            <div className="font-bold text-blue">View on explorer</div>
          </ExternalLink>
        )}
        {currencyToAdd && library?.provider?.isMetaMask && (
          <Button color="gradient" onClick={addToken} className="w-auto mt-4">
            {!success ? (
              <RowFixed className="mx-auto space-x-2">
                <span>{i18n._(t`Add ${currencyToAdd.symbol} to MetaMask`)}</span>
                <Image
                  src="/images/wallets/metamask.png"
                  alt={i18n._(t`Add ${currencyToAdd.symbol} to MetaMask`)}
                  width={24}
                  height={24}
                  className="ml-1"
                />
              </RowFixed>
            ) : (
              <RowFixed>
                {i18n._(t`Added`)} {currencyToAdd.symbol}
                {/* <CheckCircle className="ml-1.5 text-2xl text-green" size="16px" /> */}
              </RowFixed>
            )}
          </Button>
        )}
        {/* <Button color="gradient" onClick={onDismiss} style={{ margin: '20px 0 0 0' }}>
          Close
        </Button> */}
      </div>
    </div>
  )
}

interface ConfirmationModelContentProps {
  title: string
  onDismiss: () => void
  topContent: () => React.ReactNode
  bottomContent: () => React.ReactNode
}

export const ConfirmationModalContent: FC<ConfirmationModelContentProps> = ({
  title,
  bottomContent,
  onDismiss,
  topContent,
}) => {
  return (
    <div className="grid gap-4">
      <ModalHeader title={title} onClose={onDismiss} />
      {topContent()}
      {bottomContent()}
    </div>
  )
}

interface TransactionErrorContentProps {
  message: string
  onDismiss: () => void
}

export const TransactionErrorContent: FC<TransactionErrorContentProps> = ({ message, onDismiss }) => {
  const { i18n } = useLingui()

  return (
    <div className="grid gap-6">
      <div>
        <div className="flex justify-between">
          <div className="text-lg font-medium text-high-emphesis">{i18n._(t`Error`)}</div>
          <CloseIcon onClick={onDismiss} />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <AlertTriangle className="text-red" style={{ strokeWidth: 1.5 }} size={64} />
          <div className="font-bold text-red">{message}</div>
        </div>
      </div>
      <div>
        <Button color="gradient" size="lg" onClick={onDismiss}>
          Dismiss
        </Button>
      </div>
    </div>
  )
}

interface ConfirmationModalProps {
  isOpen: boolean
  onDismiss: () => void
  hash: string | undefined
  content: () => React.ReactNode
  attemptingTxn: boolean
  pendingText: string
  currencyToAdd?: Currency | undefined
}

const TransactionConfirmationModal: FC<ConfirmationModalProps> = ({
  isOpen,
  onDismiss,
  attemptingTxn,
  hash,
  pendingText,
  content,
  currencyToAdd,
}) => {
  const { chainId } = useActiveWeb3React()

  if (!chainId) return null

  // confirmation screen
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={90}>
      {attemptingTxn ? (
        <ConfirmationPendingContent onDismiss={onDismiss} pendingText={pendingText} />
      ) : hash ? (
        <TransactionSubmittedContent
          chainId={chainId}
          hash={hash}
          onDismiss={onDismiss}
          currencyToAdd={currencyToAdd}
        />
      ) : (
        content()
      )}
    </Modal>
  )
}

export default TransactionConfirmationModal
