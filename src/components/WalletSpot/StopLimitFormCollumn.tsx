import { Flex, Stack, Text } from '@chakra-ui/react';

import { SliderWallet } from '@/components/Form/SliderWallet';
import { InputWalletSpot } from '@/components/Form/InputWalletSpot';
import { ButtonWalletSpot } from '@/components/Form/ButtonWalletSpot';

interface StopLimitFormCollumnProps {
  criptoFrom: string;
  criptoTo: string;
  available: string;
  deal: 'sell' | 'buy';
}

export function StopLimitFormCollumn({
  criptoFrom,
  criptoTo,
  available,
  deal,
}: StopLimitFormCollumnProps) {
  return (
    <Flex direction="column" flex="1 1 0%">
      <Flex justifyContent="space-between" fontSize="small" color="gray.300">
        <Text>Available</Text>
        <Text>
          {available} {criptoFrom}
        </Text>
      </Flex>
      <Flex as="form" direction="column" marginTop="1">
        <Stack spacing={3}>
          <InputWalletSpot textLeft="Stop" textRight={criptoFrom} />
          <InputWalletSpot
            textLeft="Limit"
            textRight={criptoFrom}
            value="0.000123"
          />
          <InputWalletSpot textLeft="Amount" textRight={criptoTo} />
          <SliderWallet />
          <InputWalletSpot textLeft="Total" textRight={criptoFrom} />
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
