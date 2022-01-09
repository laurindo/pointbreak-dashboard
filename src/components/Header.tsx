import {
  Flex,
  Text,
  Icon,
  HStack,
  Box,
  Avatar,
  Image,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

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
      maxWidth={1520}
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        width="64"
        color="yellow.500"
      >
        <NextLink href="/dashboard" passHref>
          <Link>
            <Image src="/images/logo-horizontal.png" alt="Logo" height={50} />
          </Link>
        </NextLink>
      </Text>

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
