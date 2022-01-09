import { Flex } from '@chakra-ui/react';

export function TableToCript() {
  return (
    <Flex margin="2" fontSize="small" color="gray.300">
      <Flex flex="1 1 0%" justifyContent="flex-start">
        Par(USDT)
      </Flex>
      <Flex flex="1 1 0%" justifyContent="flex-end">
        Preço
      </Flex>
      <Flex flex="1 1 0%" justifyContent="flex-end">
        Variação
      </Flex>
    </Flex>
  );
}
