import { Flex, Text, Icon, HStack, Box, Avatar, Image } from '@chakra-ui/react';
import { RiWallet3Line, RiBitCoinLine } from 'react-icons/ri';
import { ItemMenuNav } from './ItemMenuNav';
import { useActiveWeb3React } from '@/services/web3';
import Web3Network from '@/components/Web3Network';
import Web3Status from '@/components/Web3Status';
import useBalance from '@/hooks/useBalance';
import { shortenAddress } from '@/utils/format';
import { MenuLanguage } from './MenuLanguage';

export function Header() {
  const { account, chainId, library } = useActiveWeb3React();

  const balance = useBalance(account);
  // debugger;

  // data experimental para formar o componente de language
  const languageSetted = 'English';

  return (
    <Flex
      width="100%"
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      as="header"
      align="center"
      maxWidth={1520}
    >
      <Image src="/images/logo-horizontal.png" alt="Logo" height={50} />

      <Box as="nav" height="5" marginLeft="5">
        <ItemMenuNav path="/">Home</ItemMenuNav>
        <ItemMenuNav path="/keys">Controle de Chaves</ItemMenuNav>
      </Box>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          {/* <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" /> */}
          {account ? (
            <>
              <Box
                cursor="pointer"
                maxHeight="40px"
                borderWidth={2}
                borderColor="blue.600"
                borderRadius="lg"
                bgColor="gray.800"
                _hover={{ bgColor: 'gray.800' }}
                paddingX="4"
                paddingY="2"
                fontSize="small"
                color="whiteAlpha.800"
              >
                <Text display="flex" justifyContent="center" align="center">
                  <Icon as={RiWallet3Line} fontSize="19" marginRight="1" />
                  {account && shortenAddress(account)}
                </Text>
              </Box>
              <Box
                cursor="pointer"
                maxHeight="40px"
                borderWidth={2}
                borderColor="blue.600"
                borderRadius="lg"
                bgColor="gray.800"
                paddingX="4"
                paddingY="2"
                fontSize="small"
              >
                <Text display="flex" justifyContent="center" align="center">
                  Balance: {balance}
                  <Icon as={RiBitCoinLine} fontSize="19" marginLeft="1" />
                </Text>
              </Box>
            </>
          ) : (
            <Box>
              {library && library.provider.isMetaMask && (
                <div className="hidden sm:inline-block">
                  aqui
                  <Web3Network />
                </div>
              )}
              <Web3Status />
            </Box>
          )}
        </HStack>

        <Flex align="center">
          <MenuLanguage actualLanguage={languageSetted} />
        </Flex>
      </Flex>
    </Flex>
  );
}
