import { Flex, Stack, Text } from '@chakra-ui/react';

import { InputWallet } from '../Form/InputWallet';
import { SliderWallet } from './SliderWallet';
import { ButtonWalletSpot } from '../Form/ButtonWalletSpot';

interface OCOFormCollumnProps {
  criptoFrom: string;
  criptoTo: string;
  available: string;
  deal: 'sell' | 'buy';
}

export function OCOFormCollumn({
  criptoFrom,
  criptoTo,
  available,
  deal,
}: OCOFormCollumnProps) {
  return (
    <Flex direction="column" flex="1 1 0%">
      <Flex justifyContent="space-between" fontSize="small" color="gray.300">
        <Text>Disponível</Text>
        <Text>
          {available} {criptoFrom}
        </Text>
      </Flex>
      <Flex as="form" direction="column" marginTop="1">
        <Stack spacing={3}>
          <InputWallet textLeft="Price" textRight={criptoFrom} />
          <InputWallet textLeft="Stop" textRight={criptoFrom} />
          <InputWallet textLeft="Limit" textRight={criptoFrom} />
          <InputWallet textLeft="Amount" textRight={criptoTo} />
          <SliderWallet />
          <InputWallet textLeft="Total" textRight={criptoFrom} />
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
