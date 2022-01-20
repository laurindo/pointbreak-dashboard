import { Flex, Stack, Text } from '@chakra-ui/react';

import { InputWallet } from '../Form/InputWallet';
import { SliderWallet } from './SliderWallet';
import { ButtonWalletSpot } from '../Form/ButtonWalletSpot';
import { useState } from 'react';

interface LimitFormCollumnProps {
  criptoFrom: string;
  criptoTo: string;
  available: string;
  availableAssetName: string;
  priceCryptoFrom?: string;
  deal: 'sell' | 'buy';
}

export function LimitFormCollumn({
  criptoFrom,
  criptoTo,
  available,
  availableAssetName,
  priceCryptoFrom,
  deal,
}: LimitFormCollumnProps) {
  const taxSell = 0.005;
  const maxSell = parseFloat(available) - taxSell; // 1,0001
  console.log(maxSell);

  const [amount, setAmount] = useState(null);
  const handleChange = (event) => {
    if (parseFloat(event.target.value) > maxSell) {
      setAmount(maxSell);
      return;
    }
    setAmount(event.target.value);
  };
  const totalSell = amount
    ? (parseFloat(amount) * parseFloat(priceCryptoFrom)).toFixed(2)
    : '';

  return (
    <Flex direction="column" flex="1 1 0%">
      <Flex justifyContent="space-between" fontSize="small" color="gray.300">
        <Text>Disponível</Text>
        <Text>
          {available} {availableAssetName}
        </Text>
      </Flex>
      <Flex as="form" direction="column" marginTop="1">
        <Stack spacing={3}>
          <InputWallet
            textLeft="Price"
            textRight={criptoFrom}
            value={priceCryptoFrom}
          />
          <InputWallet
            textLeft="Amount"
            textRight={criptoTo}
            max={maxSell}
            value={amount}
            onChange={handleChange}
          />
          <SliderWallet />
          <InputWallet
            textLeft="Total"
            textRight={criptoFrom}
            value={String(totalSell)}
            type="text"
          />
        </Stack>
        <Flex direction="column" marginTop="6">
          <ButtonWalletSpot
            type="submit"
            colorScheme={deal == 'buy' ? 'green' : 'red'}
            currency={criptoTo}
            deal={deal}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
