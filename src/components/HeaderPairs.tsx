import { Flex, Text, Icon, HStack, Box, Link } from '@chakra-ui/react';
import { RiCoinsLine } from 'react-icons/ri';
import useTickerPrice from '@/hooks/useTickerPrice';

interface HeaderPairsProps {
  pair: string;
}
// Todo: Renomear o nome deste componente
export function HeaderPairs({ pair }: HeaderPairsProps) {
  const tickerPrice = useTickerPrice(pair.toLowerCase().replace('_', ''));

  return (
    <Flex w="100%" borderBottomWidth={1} borderColor="gray.700">
      <Flex h="20" align="center">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.50"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Box textAlign="center">
            <Text fontSize="large" fontWeight="bold">
              {pair.toUpperCase().replace('_', '/')}
            </Text>
            <Link display="flex" color="gray.300">
              <Icon as={RiCoinsLine} fontSize="14" mt="0.5" />
              <Text fontSize="small">Bitcoin</Text>
            </Link>
          </Box>
        </HStack>

        <HStack spacing="8">
          <Flex align="center">
            <Box textAlign="center">
              <Text fontSize="medium">
                {tickerPrice?.o ? Number(tickerPrice.o).toFixed(2) : 0}
              </Text>
              <Text fontSize="small">
                $ {tickerPrice?.o ? Number(tickerPrice.o).toFixed(2) : 0}
              </Text>
            </Box>
          </Flex>

          <Flex align="center">
            <Box textAlign="center">
              <Text color="gray.300" fontSize="small">
                Variação em 24h
              </Text>
              <Text color="red.500" fontSize="small">
                -0.0207 -3.98%
              </Text>
            </Box>
          </Flex>

          <Flex align="center">
            <Box textAlign="center">
              <Text color="gray.300" fontSize="small">
                Máximo em 24h
              </Text>
              <Text fontSize="small">
                {tickerPrice?.h ? Number(tickerPrice.h).toFixed(2) : 0}
              </Text>
            </Box>
          </Flex>

          <Flex align="center">
            <Box textAlign="center">
              <Text color="gray.300" fontSize="small">
                Mínimo em 24h
              </Text>
              <Text fontSize="small">
                {tickerPrice?.l ? Number(tickerPrice.l).toFixed(2) : 0}
              </Text>
            </Box>
          </Flex>

          <Flex align="center">
            <Box textAlign="center">
              <Text color="gray.300" fontSize="small">
                Volume em 24h(ADX)
              </Text>
              <Text fontSize="small">6,029,941.00</Text>
            </Box>
          </Flex>

          <Flex align="center">
            <Box textAlign="center">
              <Text color="gray.300" fontSize="small">
                Volume 24h(USDT)
              </Text>
              <Text fontSize="small">3,047,896.39</Text>
            </Box>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
}
