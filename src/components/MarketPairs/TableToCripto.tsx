import {
  Text,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Flex,
  Box,
} from '@chakra-ui/react';
import { useStoreState } from 'easy-peasy';
import { useMemo } from 'react';
import Link from 'next/link';
import { FaStar, FaRegStar } from 'react-icons/fa';

const scrollBarCss = {
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-track': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#4B4D63',
    borderRadius: '24px',
  },
  '&::hover::-webkit-scrollbar-thumb': {
    background: 'rgb(64 64 64)',
  },
};

export function TableToCript({ data, height = '450px' }) {
  const query = useStoreState((state: any) => state.query);

  const filteredData = useMemo(
    () =>
      data.filter((dataBtcPair) => {
        console.log('filtering coin...');
        return dataBtcPair.pair.toLowerCase().includes(query.toLowerCase());
      }),
    [data, query],
  );

  return (
    <Box height={height} overflowY="scroll" css={scrollBarCss}>
      <Table
        size="sm"
        colorScheme="whiteAlpha"
        variant="striped"
        position="relative"
      >
        <Thead>
          <Tr>
            <Th color="gray.300" position="sticky" top="0" bg="gray.800">
              Pair
            </Th>
            <Th
              color="gray.300"
              isNumeric
              position="sticky"
              top="0"
              bg="gray.800"
            >
              Price
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((d) => (
            <Link href={`/trade/${d.pair.replace('/', '_')}`} key={d.key}>
              <Tr>
                <Td>
                  <Flex>
                    <Icon as={FaStar} mr="5px" />
                    <Text fontSize="xs">{d.pair}</Text>
                  </Flex>
                </Td>
                <Td isNumeric>
                  <Text fontSize="xs">{d.price}</Text>
                </Td>
              </Tr>
            </Link>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
