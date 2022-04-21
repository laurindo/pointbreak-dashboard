import { Flex, Text, Icon, Box } from '@chakra-ui/react';

import { RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';
import { OrderLine } from './OrderLine';

export function OrderBook() {
  return (
    <Flex
      direction="column"
      width="100%"
      maxWidth={320}
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Box
        width="100%"
        bgColor="gray.800"
        color="blue.600"
        fontSize="medium"
        fontWeight="bold"
        padding="2"
      >
        Order Book
      </Box>

      <Flex margin="2" fontSize="small" color="gray.300">
        <Flex flex="1 1 0%" justifyContent="flex-start">
          Price(USDT)
        </Flex>
        <Flex flex="1 1 0%" justifyContent="flex-end">
          Amount(BTC)
        </Flex>
        <Flex flex="1 1 0%" justifyContent="flex-end">
          Total
        </Flex>
      </Flex>

      <Flex direction="column" flex="1 1 0%">
        <OrderLine typeOrder="red" />
        <Flex paddingX={4} paddingY={1} align="center">
          <Box display="flex" flex="1 1 0%" fontSize="large" color="green.400">
            <Text>41,883.09</Text>
            <Icon as={RiArrowUpLine} fontSize="20" />
          </Box>
          <Box flex="1 1 0%" color="gray.300" fontSize="small">
            $41,907.56
          </Box>
        </Flex>
        <OrderLine typeOrder="green" />
      </Flex>
    </Flex>
  );
}
