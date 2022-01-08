import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from 'react-icons/ri';

export function Header() {
  return (
    <Flex
      w="100%"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      as="header"
      align="center"
      maxWidth={1480}
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
        color="yellow.500"
      >
        Binance
      </Text>

      {/* <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Search in plattform"
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex> */}

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
