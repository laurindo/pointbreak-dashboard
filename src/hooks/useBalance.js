import { useState, useEffect } from 'react'
import Web3 from 'web3'

const useBalance = (account) => {
  const [balance, setBalance] = useState(null)

  useEffect(() => {
    async function getBalance() {
      // link pra checar transacao na rede BSC
      // https://testnet.bscscan.com/tx/0xb002a3f2939a8c4656a38ae767d7bc408ef60cb8d9c46e836c51f906b6ff296f
      // https://testnet.bscscan.com/address/0x8b624301f512e46b666a825fbd4336a273fd0ff9#code
      // https://docs.binance.org/smart-chain/developer/BEP20.html
      const URL =
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_BSC_TEST_URL
          : process.env.NEXT_PUBLIC_BSC_MAIN_URL
      const web3 = new Web3(URL)
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
        const currentBalance = await contract.methods.balanceOf(account).call()
        setBalance(currentBalance)
      }
    }
    getBalance()
  }, [account])

  if (balance === null) return 'loading balance...'
  return balance
}

export default useBalance
