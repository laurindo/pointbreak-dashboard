import { Flex, Text, Icon, HStack, Box, Avatar, Image } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';
import { ItemMenuNav } from './ItemMenuNav';

export function Header() {
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
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Diego Masin</Text>
            <Text color="gray.300" fontSize="small">
              diegoifce@gmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Diego Masin"
            src="https://avatars.githubusercontent.com/u/5197300?v=4"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
