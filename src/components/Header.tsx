import { Flex, Text, Icon, HStack, Box, Avatar, Image } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';
import { ItemMenuNav } from './ItemMenuNav';
import { useActiveWeb3React } from '@/services/web3';
import Web3Network from '@/components/Web3Network';
import Web3Status from '@/components/Web3Status';
import useBalance from '@/hooks/useBalance';
import { shortenAddress } from '@/utils/format';

export function Header() {
  const { account, chainId, library } = useActiveWeb3React();

  const balance = useBalance(account);
  // debugger;

  return (
    <Flex
      width="100%"
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      as="header"
      align="center"
      maxWidth="100vw"
    >
      <Image src="/images/logo-horizontal.png" alt="Logo" height={50} />

      <Box as="nav" height="5" marginLeft="5">
        <ItemMenuNav path="/">Home</ItemMenuNav>
        <ItemMenuNav path="/keys">Controle de Chaves</ItemMenuNav>
      </Box>

      <div>
        {library && library.provider.isMetaMask && (
          <div className="hidden sm:inline-block">
            aqui
            <Web3Network />
          </div>
        )}
        <Web3Status />
      </div>

      <Flex align="center" ml="auto">
        {/*<HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>*/}

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>{account && shortenAddress(account)}</Text>
            <Text color="gray.300" fontSize="small">
              Balance: {balance}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
