import {
  Flex,
  Input,
  Icon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  InputGroup,
  InputLeftElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { FaStar, FaRegStar } from "react-icons/fa";

export function MarketPairs() {

  return (
    <Flex w="100%" maxWidth={370} borderWidth={1} borderColor="gray.700" flexDirection="column">

      <Flex w="100%" p="10px" alignItems="center" position="relative">
        <InputGroup bg="gray.500" borderRadius="10px">
          <InputLeftElement children={<Icon as={FiSearch} />} />
          <Input type='text' placeholder='Search' border="none" />
        </InputGroup>
      </Flex>

      <Flex w="100%" padding="10px">
        <Tabs w="100%">
          <TabList>
            <Tab><Icon as={FaStar} /></Tab>
            <Tab>BTC</Tab>
            <Tab>ETH</Tab>
            <Tab>BUSD</Tab>
            <Tab>USDT</Tab>
          </TabList>

          <TabPanels>
            <TabPanel px="0" py="5">
              <Table size='sm' colorScheme="whiteAlpha" variant='striped'>
                <Thead>
                  <Tr>
                    <Th color="gray.300">Pair</Th>
                    <Th color="gray.300" isNumeric>Price</Th>
                    <Th color="gray.300" isNumeric>Change %</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Icon as={FaStar} mr="5px" onClick={() => alert('clicked')} />
                      BTC/BUSD
                    </Td>
                    <Td isNumeric>41,987.98</Td>
                    <Td isNumeric>25.4%</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Icon as={FaStar} mr="5px" />
                      BTC/BUSD
                    </Td>
                    <Td isNumeric>41,987.98</Td>
                    <Td isNumeric>25.4%</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
