import {
  Flex,
  Text,
  Icon,
  HStack,
  Box,
  Link,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import { SearchInMarkerPairs } from './SearchInMarkerPairs';

export function MarketPairs() {
  return (
    <Flex
      width="100%"
      maxWidth={320}
      borderTopWidth={1}
      borderBottomWidth={1}
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <SearchInMarkerPairs />
    </Flex>
  );
}
