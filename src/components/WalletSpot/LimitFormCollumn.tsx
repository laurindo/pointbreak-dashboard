import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { InputWallet } from '../Form/InputWallet';

interface LimitFormCollumnProps {
  criptoFrom: string;
  criptoTo: string;
  available: string;
  buy?: boolean;
  sell?: boolean;
}

export function LimitFormCollumn({
  criptoFrom,
  criptoTo,
  available,
  buy,
  sell,
}: LimitFormCollumnProps) {
  return (
    <Flex direction="column" flex="1 1 0%">
      <Flex justifyContent="space-between" fontSize="small" color="gray.300">
        <Text>Disponível</Text>
        <Text>
          {available} {criptoFrom}
        </Text>
      </Flex>
      <Stack as="form" spacing={3} marginTop="1">
        <InputWallet textLeft="Price" textRight={criptoFrom} />
        <InputWallet textLeft="Amount" textRight={criptoTo} />
        {buy ? <Button>Comprar</Button> : <Button>Vender</Button>}
      </Stack>
    </Flex>
  );
}
