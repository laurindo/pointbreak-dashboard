import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useStore, useStoreActions } from 'easy-peasy';
import { useCallback, useEffect, useState } from 'react';

import { RiSearchLine } from 'react-icons/ri';

export function SearchInMarkerPairs() {
  const setQuery = useStoreActions((action) => action.setQuery);
  const [querySearch, setQuerySearch] = useState('');

  const handleQuery = useCallback(
    (e) => {
      setQuerySearch(e.target.value);
    },
    [querySearch],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => setQuery(querySearch), 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [querySearch, setQuery]);

  return (
    <Flex height="10" marginY={3}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={<Icon as={RiSearchLine} fontSize="20" />}
        />
        <Input
          placeholder="Pesquisar"
          borderWidth={0}
          bgColor="gray.800"
          onChange={handleQuery}
          _focus={{ outline: 'none' }}
        />
      </InputGroup>
    </Flex>
  );
}
