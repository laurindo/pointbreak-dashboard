import {
  Flex,
  Text,
  Icon,
  HStack,
  Box,
  Link,
  Progress,
} from '@chakra-ui/react';

import { RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';

const nRepeat = 17;

export function OrderBook() {
  return (
    <Flex
      direction="column"
      width="100%"
      maxWidth={370}
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Box
        width="100%"
        bgColor="gray.800"
        color="blue.500"
        fontSize="medium"
        fontWeight="bold"
        padding="2"
      >
        Order Book
      </Box>

      <Flex margin="2" fontSize="small" color="gray.300">
        <Flex flex="1 1 0%" justifyContent="flex-start">
          Preço(USDT)
        </Flex>
        <Flex flex="1 1 0%" justifyContent="flex-end">
          Quantia(BTC)
        </Flex>
        <Flex flex="1 1 0%" justifyContent="flex-end">
          Total
        </Flex>
      </Flex>

      <Flex direction="column" flex="1 1 0%">
        <Box height={340} width="100%" fontSize="small">
          {[...Array(nRepeat)].map((e, i) => (
            <Box key={i} position="relative">
              <Box display="flex" marginX="2">
                <Flex flex="1 1 0%" justifyContent="flex-start" color="red.400">
                  41820.25
                </Flex>
                <Flex flex="1 1 0%" justifyContent="flex-end">
                  0.08800
                </Flex>
                <Flex flex="1 1 0%" justifyContent="flex-end">
                  3,680.18200
                </Flex>
              </Box>
              <Box
                position="absolute"
                bgColor="red.900"
                top="0"
                right="0"
                width={`${Math.floor(Math.random() * 100)}%`}
                height="full"
                zIndex="-1"
              />
            </Box>
          ))}
        </Box>
        <Flex paddingX={4} paddingY={1} align="center">
          <Box display="flex" flex="1 1 0%" fontSize="large" color="green.400">
            <Text>41,883.09</Text>
            <Icon as={RiArrowUpLine} fontSize="20" />
          </Box>
          <Box flex="1 1 0%" color="gray.300" fontSize="small">
            $41,907.56
          </Box>
        </Flex>
        <Box height={340} width="100%" fontSize="small">
          {[...Array(nRepeat)].map((e, i) => (
            <Box key={i} position="relative">
              <Box display="flex" marginX="2">
                <Flex
                  flex="1 1 0%"
                  justifyContent="flex-start"
                  color="green.400"
                >
                  41820.25
                </Flex>
                <Flex flex="1 1 0%" justifyContent="flex-end">
                  0.08800
                </Flex>
                <Flex flex="1 1 0%" justifyContent="flex-end">
                  3,680.18200
                </Flex>
              </Box>
              <Box
                position="absolute"
                bgColor="green.900"
                top="0"
                right="0"
                width={`${Math.floor(Math.random() * 100)}%`}
                height="full"
                zIndex="-1"
              />
            </Box>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
}
