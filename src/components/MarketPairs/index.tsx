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
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { RiStarFill } from 'react-icons/ri';

import { SearchInMarkerPairs } from './SearchInMarkerPairs';
import { TableToCript } from './TableToCripto';

export function MarketPairs() {
  return (
    <Flex
      direction="column"
      width="100%"
      maxWidth={320}
      borderTopWidth={1}
      borderBottomWidth={1}
      borderRightWidth={1}
      borderColor="gray.700"
      paddingX={4}
    >
      <SearchInMarkerPairs />

      <Tabs>
        <TabList>
          <Tab>
            <Icon as={RiStarFill} fontSize="10" />
          </Tab>
          <Tab fontSize="small">BUSD</Tab>
          <Tab fontSize="small">USDT</Tab>
          <Tab fontSize="small">BNB</Tab>
          <Tab fontSize="small">BTC</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TableToCript />
          </TabPanel>
          <TabPanel>
            <TableToCript />
          </TabPanel>
          <TabPanel>
            <TableToCript />
          </TabPanel>
          <TabPanel>
            <TableToCript />
          </TabPanel>
          <TabPanel>
            <TableToCript />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
