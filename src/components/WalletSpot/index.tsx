import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
} from '@chakra-ui/react';
import { LimitFormCollumn } from './LimitFormCollumn';

export function WalletSpot() {
  return (
    <Flex direction="column">
      <Box
        width="100%"
        bgColor="gray.800"
        color="blue.500"
        fontSize="medium"
        fontWeight="bold"
        padding="2"
      >
        Wallet Spot
      </Box>
      <Tabs>
        <TabList>
          <Tab fontSize="small" _focus={{ outline: '0' }}>
            Limite
          </Tab>
          <Tab fontSize="small" _focus={{ outline: '0' }}>
            Market Order
          </Tab>
          <Tab fontSize="small" _focus={{ outline: '0' }}>
            Stop-Limit
          </Tab>
          <Tab fontSize="small" _focus={{ outline: '0' }}>
            OCO
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <HStack spacing={6}>
              <LimitFormCollumn
                criptoFrom="ETH"
                criptoTo="EOS"
                available="0.00000000"
                sell
              />
              <LimitFormCollumn
                criptoFrom="ETH"
                criptoTo="EOS"
                available="0.00000000"
                buy
              />
            </HStack>
          </TabPanel>
          <TabPanel>Market Order</TabPanel>
          <TabPanel>Stop-Limit</TabPanel>
          <TabPanel>OCO</TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
