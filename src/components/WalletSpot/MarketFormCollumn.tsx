import { Flex, Stack, Text } from '@chakra-ui/react';

import { SliderWallet } from '@/components/Form/SliderWallet';
import { InputWalletSpot } from '@/components/Form/InputWalletSpot';
import { ButtonWalletSpot } from '@/components/Form/ButtonWalletSpot';

interface MarketFormCollumnProps {
  criptoFrom: string;
  criptoTo: string;
  available: string;
  deal: 'sell' | 'buy';
}

export function MarketFormCollumn({
  criptoFrom,
  criptoTo,
  available,
  deal,
}: MarketFormCollumnProps) {
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
          <InputWalletSpot
            type="text"
            textLeft="Price"
            textRight={criptoFrom}
            value="Mercado"
            isDisabled
          />
          <InputWalletSpot textLeft="Amount" textRight={criptoTo} />
          <SliderWallet />
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
