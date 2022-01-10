import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { InputWallet } from '../Form/InputWallet';
import { SliderWallet } from './SliderWallet';

interface LimitFormCollumnProps {
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
}: LimitFormCollumnProps) {
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
          <InputWallet
            textLeft="Price"
            value="Mercado"
            disabled
            textRight={criptoFrom}
          />
          <InputWallet textLeft="Amount" textRight={criptoTo} />
          <SliderWallet />
        </Stack>
        <Flex direction="column" marginTop="6">
          {deal == 'buy' ? (
            <Button type="submit" colorScheme="green">
              Comprar {criptoTo}
            </Button>
          ) : (
            <Button type="submit" colorScheme="red">
              Vender {criptoTo}
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
