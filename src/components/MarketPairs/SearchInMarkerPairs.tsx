import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import { RiSearchLine } from 'react-icons/ri';

export function SearchInMarkerPairs() {
  return (
    <Flex height="10" marginY={3}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={<Icon as={RiSearchLine} fontSize="20" />}
        />
        <Input placeholder="Pesquisar" borderWidth={0} bgColor="gray.800" />
      </InputGroup>
    </Flex>
  );
}
